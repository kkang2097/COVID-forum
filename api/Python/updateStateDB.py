import requests
from pymongo import MongoClient
import pandas as pd
import io
from datetime import date


def get_state_data():

    ### Add  Try and Catch to Response ###
    response = requests.get("https://api.covidactnow.org/v2/states.csv?apiKey=bf2a7d65d8834de88792445e0e8df940").content
    data_handle = pd.read_csv(io.StringIO(response.decode('utf-8')))
    data = data_handle[['state', 'population', 'metrics.caseDensity', 'actuals.newCases', 'actuals.newDeaths', 'actuals.cases', 'actuals.deaths', 'actuals.vaccinationsInitiated', 'actuals.vaccinationsCompleted']]
    data = data.rename(columns={'metrics.caseDensity': 'caseDensity', 'actuals.newCases': 'newCases', 'actuals.newDeaths' : 'newDeaths', 'actuals.cases' : 'cases', 'actuals.deaths' : 'deaths', 'actuals.vaccinationsInitiated' : "vaccineInit", 'actuals.vaccinationsCompleted' : 'vaccineComplete'})
    return data
    
def serialize_and_store(data):

    convert_data_dict = pd.DataFrame.to_dict(data, orient='records')
    convert_data_dict.append({'Date_Updated': date.today().strftime("%d/%m/%Y")})

    ### Add Try and Catch to Connect ###
    cluster = MongoClient("mongodb+srv://chris:12345@cluster0.6zsms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

    db = cluster["test"]
    collection = db["state"]
    collection.delete_many({})
    collection.insert_many(convert_data_dict)
    
    # TEST SUCCESS (TRUE means likely updated successfully)
    if collection.count_documents({"Date_Updated": date.today().strftime("%d/%m/%Y")}) == 1 \
        and collection.count_documents({}) < 60 and collection.count_documents({}) > 45:  
            return True
    return False

def check_if_current_data():
    cluster = MongoClient("mongodb+srv://chris:12345@cluster0.6zsms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    db = cluster["test"]
    collection = db["state"]

    if collection.count_documents({"Date_Updated": date.today().strftime("%d/%m/%Y")}) == 1:
        return True
    return False

def update_state_db_main():
    data = get_state_data()
    if len(data.index) < 60 and len(data.index) >45:
        if serialize_and_store(data):
            return True
    print("Error in UpdateStateDB.py at location update_state_db_main()")
    return False

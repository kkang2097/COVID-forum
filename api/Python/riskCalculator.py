def retrieve_State_Data(state):
    from pymongo import MongoClient
    cluster = MongoClient("mongodb+srv://chris:12345@cluster0.6zsms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    db = cluster["test"]
    collection = db["state"]
    return collection.find_one({"state": state}) 

def risk_Algorithm(state, sex, age, vaccine):

    caseDensity =  retrieve_State_Data(state)['caseDensity']

    # Men make up 1.4 times as many deaths
    # https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/
    risk = ( caseDensity / 1.2 + (caseDensity * 0.4 * sex) ) / 1.2 #with men being 1 and women 0

    if age > 75:
        risk = risk * 8
    elif age > 75:
        risk = risk * 3
    elif age > 45:
        risk = risk * 1
    elif age > 20:
        risk = risk * 0.1
    else:
        risk = 0

    if vaccine > 0:
        risk = risk * 0.15

    return risk







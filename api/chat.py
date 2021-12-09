import datetime
import re
import bson
import userClasses
import passwordHash
import jwt
import requests
import pymongo

cluster = pymongo.MongoClient("mongodb+srv://chris:12345@cluster0.6zsms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["test"]
collection = db["statuses"]

#Need their location to be city, state. Not just the state
def addMessage(name, state, message):
    today = datetime.today()
    date = today.strftime("%d/%m/%Y")
    
    x = collection.insert_one({"name": name}, {"state": state}, {"date": date}, {"message": message})

    if x == None:
        return "Error Adding Status"
    else:
        return False

def getMessages():
    x = collection.find()
    if x == None:
        return None, "Error Getting Status"
    else:
        return x, None

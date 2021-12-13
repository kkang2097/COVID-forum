import datetime
import re
import bson
import userClasses
import passwordHash
import jwt
import requests
import pymongo
import datetime

cluster = pymongo.MongoClient("mongodb+srv://chris:12345@cluster0.6zsms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["test"]
collection = db["statuses"]

#Need their location to be city, state. Not just the state
def addMessage(name, state, message):
    today = datetime.today()
    date = today.strftime("%d/%m/%Y")
    #Elliot: adding time also
    time = datetime.datetime.utcnow()

    x = collection.insert_one({"name": name}, {"state": state}, {"date": date}, {"time": time}, {"message": message})

    if x == None:
        return "Error Adding Status"
    else:
        return False

def getMessages():
    #Find "newest to oldest" documents, limit 10 maximum retrieved
    x = collection.find().sort({"x":-1}).limit(10)
    if x == None:
        return None, "Error Getting Status"
    else:
        return x, None

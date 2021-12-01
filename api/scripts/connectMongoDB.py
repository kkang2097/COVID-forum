import requests
import pymongo

cluster = pymongo.MongoClient("mongodb+srv://chris:12345@cluster0.6zsms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["test"]
collection = db["users"]
 
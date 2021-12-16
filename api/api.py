from sys import dont_write_bytecode
from flask import Flask, render_template, request, redirect, url_for, request
import requests
from flask_cors import CORS

#error here
import authenticateUser
import addUser
import userClasses
import chat

import requests
import pymongo
from bson.json_util import dumps



#Can run 'pythom -m flask run' to test the API

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

#Basic API checking
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')
@app.route('/')
def index():
    return app.send_static_file('index.html')
@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api/12345')
def get_number():
    return 15

@app.route("/getstatedata", methods=['POST','GET'])
def getstatedata():
    cluster = pymongo.MongoClient("mongodb+srv://chris:12345@cluster0.6zsms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    db = cluster["test"]
    collection = db["state"]

    y = dumps(collection.aggregate([ { "$sample": { "size": 10 } } ]))

    return y

#Author: Chris Humphrey
@app.route("/auth", methods=['POST','GET'])
def auth():
    if request.method == "POST":
        token = request.json["token"]
        userData, token, error = authenticateUser.authenticateToken(token)

        if error == False:
            del userData.__dict__["_id"];
            del userData.__dict__["password"];

        response = {"userData": userData.__dict__, "token": token, "error": error}
        return response

@app.route("/login", methods=['POST','GET'])
def login():
    if request.method == "POST":
        loginInfo = request.json
        userData, token, error = authenticateUser.loginUser( loginInfo['email'], loginInfo['password'])

        if error == False:
            del userData.__dict__["_id"];
            del userData.__dict__["password"];

        response = {"userData": userData.__dict__, "token": token, "error": error}
        return response


@app.route("/newAcct", methods=['POST','GET'])
def newAcct():
    if request.method == "POST":

        newAcctInfo = request.json
        #We need the city as part of location too
        userData, token, error = addUser.addUser(newAcctInfo["email"], newAcctInfo["password"], \
            newAcctInfo["name"], newAcctInfo["state"], newAcctInfo["emailUpdates"])

        if error == False:
            del userData.__dict__["_id"];
            del userData.__dict__["password"];

        response = {"userData": userData.__dict__, "token": token, "error": error}
        return response

@app.route("/addPerson", methods=['POST','GET'])
def addPerson():
    if request.method == "POST":
        newPersonInfo = request.json
        token = newPersonInfo["token"]
        userData, token, error = authenticateUser.authenticateToken(token)

        if error == False:
            #City needed here as well
            userData, error = addUser.addPerson(userData, newPersonInfo['name'], newPersonInfo['age'], \
                    newPersonInfo['sex'], newPersonInfo['state'], newPersonInfo['vaccine'], newPersonInfo['race'], \
                    newPersonInfo['smoker'], newPersonInfo['heightFeet'], newPersonInfo['heightInches'], newPersonInfo['heartLung'], newPersonInfo['mask'] )
            del userData.__dict__["_id"];
            del userData.__dict__["password"];

        response = {"userData": userData.__dict__, "token": token, "error": error}
        return response


@app.route("/removePerson", methods=['POST','GET'])
def removePerson():
    if request.method == "POST":
        data = request.json
        token = data["token"]
        personToRemove = data["personToRemove"]
        print("works")

        userData, token, error = authenticateUser.authenticateToken(token)
        print(error)

        if error == False:

            userData, error = addUser.removePerson(userData, personToRemove)

        del userData.__dict__["_id"];
        del userData.__dict__["password"];
        response = {"userData": userData.__dict__, "token": token, "error": error}
        return response

@app.route("/addChat", methods=['POST','GET'])
def addChat():
    if request.method == "POST":
        data = request.json
        token = data["token"]
        message = data["message"]
        city = data["city"]

        userData, token, error = authenticateUser.authenticateToken(token)

        if error == False:
            #Elliot: I think it should be name, location instead.
            #California is a big state, the user wants to know what's going on
            #in their city.
            name = userData["name"]
            state = userData["state"]
            error = chat.addMessage(name, state, message)

        del userData.__dict__["_id"];
        del userData.__dict__["password"];
        response = {"userData": userData.__dict__, "token": token, "error": error}
        return response

@app.route("/getChat", methods=['POST','GET'])
def getChat():

     if request.method == "POST":
        data = request.json
        token = data["token"]
        userData, token, error = authenticateUser.authenticateToken(token)

        if error == False:
            messages, error = chat.getMessages()

        del userData.__dict__["_id"];
        del userData.__dict__["password"];
        response = {"userData": userData.__dict__, "messages": messages, "token": token, "error": error}
        return response

app.run()

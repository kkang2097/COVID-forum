import time
from flask import Flask
from sys import dont_write_bytecode
from flask import Flask, render_template, request, redirect, url_for, request
import requests
from flask_cors import CORS
import authenticateUser
import addUser
import userClasses
#Can run 'pythom -m flask run' to test the API

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)



@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route("/auth", methods=['POST','GET'])
def auth():
    if request.method == "POST":
        token = request.json
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
        userData, token, error = authenticateUser.authenticateToken(token)

        if error == False:

            userData, error = addUser.removePerson(userData, personToRemove)

        del userData.__dict__["_id"];
        del userData.__dict__["password"];
        response = {"userData": userData.__dict__, "token": token, "error": error}
        return response
  
if __name__ == "__main__":

    app.debug = True
    app.run()


from sys import dont_write_bytecode
from flask import Flask, render_template, request, redirect, url_for, request
import requests
from flask_cors import CORS
import authenticateUser
import addUser
import userClasses


# if check_if_current_data() == False:
#     print("Attempting update of State Mongo DB")
#     update_state_db_main()


# Thigns to do 
# add person verification
# add risk score calcuationg
# add risk score updating
# add general updating of state databse
# env name is "e39"

app = Flask(__name__)
CORS(app)

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






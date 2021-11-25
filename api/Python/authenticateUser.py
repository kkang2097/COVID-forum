import bson
import jwt
import passwordHash
import connectMongoDB
import userClasses
import json

secret = 'secret'

def loginUser(email, password):

    results = connectMongoDB.collection.find_one({"email": email})

    if results == None:
        return None, None, "User not found"
    else:
        pass

    userData = userClasses.User()
    userData.__dict__ = results
    old_password = results['password']

    if passwordHash.passwordChecker(password, old_password) or password == str(old_password[32:]):
        token = jwt.encode({'email': str(results['email']), 'password': str(results['password'][32:])}, secret, algorithm="HS256")
        return userData, token, False
    else:
        return userClasses.User(), None, "Password Not Correct"

def authenticateToken(token):
    data = jwt.decode(token, secret, algorithms="HS256")
    email = data['email']
    password = data['password']
    return loginUser(email, password)
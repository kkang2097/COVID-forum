import re
import bson

import userClasses
import passwordHash
import connectMongoDB
import jwt

secret = 'secret'

def verifyUser(email, password, name, state):
    #check if user already in DB
    results_check_user = connectMongoDB.collection.find_one({"email": email})
    if results_check_user != None:
        return "User already exists"
    else:
        pass

    #Check state 
    if not state:
         return "Input valid state, example: CA"
    else:
        pass

    #check name
    special_characters = "!@#$%^&*()+?_=,<>/"
    if any(c in special_characters for c in name):
        return "Name is invalid"
    else:
        pass
    
    if len(name) < 2 or len(name) > 25:
        return "Name is not a valid length"
    else:
        pass

    #check email
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    if(re.fullmatch(regex, email)):
        pass
    else:
        return "Invalid email"
        
    #check password
    if len(password) < 8 or len(password) > 20:
        return "Password must be between 8 and 20 characters"
    else:
        pass
    return False # No error found

def addUser(email, password, name, state, emailUpdates):

    error = verifyUser(email, password, name, state)

    if error == False:
        _id = bson.objectid.ObjectId()
        pass_hash = passwordHash.passwordHashFunction(password)
        newUser = userClasses.User(_id=_id, email=email, password=pass_hash, \
            name=name, state=state,emailUpdates=emailUpdates, numPersons=0, \
            person1=None, person2=None, person3=None )

        x = connectMongoDB.collection.insert_one(newUser.__dict__)

        if x == None:
            return userClasses.User(), None, "Error Adding User to Database"
        else:
            token = jwt.encode({'email': str(email), 'password': str(pass_hash)[32:]}, secret, algorithm="HS256")
            return newUser, token, False
    else:
        return userClasses.User(), None, error

def addPerson(user, name, age, sex, state, vaccine, race, smoker, heightFeet, heightInches, heartLung, mask):
    
    # todo: add verification of person data
    newPerson = userClasses.Person(name, age, sex, state, vaccine, race, smoker, heightFeet, heightInches, heartLung, mask)
    numPersons = user.numPersons
    if user.person1 == None:
        user.person1 = newPerson.__dict__
    elif user.person2 == None:
        user.person2 = newPerson.__dict__
    elif user.person3 == None:
        user.person3 = newPerson.__dict__

    user.numPersons += 1
    print(user.__dict__)
    x = connectMongoDB.collection.update_one({"_id": user._id}, {"$set": user.__dict__})

    if x == None:
        return user, "Error Adding Person to Database"
    else:
        return user, False

def removePerson(user, personToRemove):

    print(user._id)
    print(personToRemove)

    personToRemove = int(personToRemove)
    
    if personToRemove == 1:
        user.person1 = user.person2
        user.person2 = user.person3
        user.person3 = None
    elif personToRemove == 2:
        user.person2 = user.person3
        user.person3 = None
    elif personToRemove == 3:
        user.person3 = None

    user.numPersons -= 1

    x = connectMongoDB.collection.update_one({"_id": user._id}, {"$set": user.__dict__})
    print(user.__dict__)
    print(x)

    if x == None:
        return user, "Error Removing Person from Database"
    else:
        return user, False





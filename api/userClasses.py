from os import fdopen

from pymongo.common import _CaseInsensitiveDictionary


class User:
    def __init__(self, _id=None, email=None, password=None, name=None, state=None, emailUpdates=None, numPersons=None, person1=None, person2=None, person3=None):
        self._id = _id
        self.email = email
        self.password = password
        self.name = name
        self.state = state
        self.emailUpdates = emailUpdates
        self.numPersons = numPersons
        self.person1 = person1
        self.person2 = person2
        self.person3 = person3

class Person:
    def __init__ (self, name=None, age=None, sex=None, state=None, vaccine=None, race=None, smoker=None, heightFeet=None, heightInches=None, heartLung=None, mask=None):

        self.name = name #string
        self.age = age #int
        self.sex = sex #int: 0 for female, 1 for male
        self.state = state #string: CA FL TX etc
        self.vaccine = vaccine #int: 0 for none, 1 for partial, 2 for fully
        self.rate = race #int: 0 for black, 1 for white, 2 for latino, 3 for native american, 4 for asian
        self.smoker = smoker #int: 0 for no, 1 for yes
        self.heightFeet = heightFeet #int
        self.heightInches = heightInches #int
        self.heartLung = heartLung #int: 0 for no disease, 1 for yes disease
        self.mask = mask #int: 1 for never wears mask, 5 for always wears mask
        self.dateLastUpdateRiskScore = "TBD"
        
        age = int(age)
        print(age)
        risk = 50
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

        if vaccine:
            risk = risk * 0.3

        self.riskScore = int( risk / 1.3 )

        print(self.riskScore)


    
# def retrieve_State_Data(state):
#     from pymongo import MongoClient
#     cluster = MongoClient("mongodb+srv://chris:12345@cluster0.6zsms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
#     db = cluster["test"]
#     collection = db["state"]
#     return collection.find_one({"state": state}) 

# def risk_Algorithm(state="CA", sex=0, age=50, vaccine=1):
#     print(age)

#     # caseDensity =  retrieve_State_Data(state)['caseDensity']
#     caseDensity = 50.00
#     sex = 0
#     # Men make up 1.4 times as many deaths
#     # https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/
#     risk = ( caseDensity / 1.2 + (caseDensity * 0.4 * sex) ) / 1.2 #with men being 1 and women 0



#     return risk
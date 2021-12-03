def retrieve_State_Data(state):
    from pymongo import MongoClient
    cluster = MongoClient("mongodb+srv://chris:12345@cluster0.6zsms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    db = cluster["test"]
    collection = db["state"]
    return collection.find_one({"state": state}) 

def risk_Algorithm(person):
    age = person.age #int
    sex = person.sex #int: 0 for female, 1 for male
    state_cases_per_100k = retrieve_State_Data(person.state) 
    vaccine = person.vaccine #int: 0 for none, 1 for partial, 2 for fully
    race = person.race #int: 0 for black, 1 for white, 2 for latino, 3 for native american, 4 for asian
    smoker = person.smoker #int: 0 for no, 1 for yes
    heightFeet = person.heightFeet #int
    heightInches = person.heightInches #int
    heartLung = person.heartLung #int: 0 for no disease, 1 for yes disease
    mask = person.mask #int: 1 for never wears mask, 5 for always wears mask

    riskScore = 100
    return riskScore

# class Person:
#     def __init__ (self, name=None, age=None, sex=None, state=None, vaccine=None, race=None, smoker=None, heightFeet=None, heightInches=None, heartLung=None, mask=None):
#         self.name = name #string
#         self.age = age #int
#         self.sex = sex #int: 0 for female, 1 for male
#         self.state = state #string: CA FL TX etc
#         self.vaccine = vaccine #int: 0 for none, 1 for partial, 2 for fully
#         self.race = race #int: 0 for black, 1 for white, 2 for latino, 3 for native american, 4 for asian
#         self.smoker = smoker #int: 0 for no, 1 for yes
#         self.heightFeet = heightFeet #int
#         self.heightInches = heightInches #int
#         self.heartLung = heartLung #int: 0 for no disease, 1 for yes disease
#         self.mask = mask #int: 1 for never wears mask, 5 for always wears mask
#         self.riskScore = risk_Algorithm(self)
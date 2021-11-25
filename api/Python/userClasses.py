from os import fdopen


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
        self.riskScore = "100"
        self.dateLastUpdateRiskScore = "TBD"


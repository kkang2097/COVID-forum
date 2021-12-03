import react from "react"

export  function Call(path, data) {
    
        var root = "http://127.0.0.1:5000/"
        var x = fetch(root + path, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json()
            })
            .then((json) => {

                    var person1Name = null
                    var person1RiskScore = null
                    var person2Name = null
                    var person2RiskScore = null  
                    var person3Name = null
                    var person3RiskScore = null
                    var token = null
  

                if (json['error'] == false) {

                    token = json['token']
                    window.localStorage.setItem("Token", token);

                                     
                    
                    if (json["userData"]["person1"]) {
                         person1RiskScore= json["userData"]["person1"]["riskScore"]
                         person1Name= json["userData"]["person1"]["name"]
                        }
         
                    if (json["userData"]["person2"]) {
                         person2RiskScore= json["userData"]["person1"]["riskScore"]
                         person2Name= json["userData"]["person1"]["name"]
                        }
                    
                    if (json["userData"]["person3"]) {
                         person3RiskScore= json["userData"]["person1"]["riskScore"]
                         person3Name= json["userData"]["person1"]["name"]
                        }
                    

               
                    return {
                        type: "UPDATE_USER",
                        isLoggedIn: true,
                        error: json['error'],
                        name: json["userData"]["name"],
                        numPersons: json["userData"]["numPersons"],
                        state: json["userData"]["state"],

                        person1Name : person1Name,
                        person1RiskScore: person1RiskScore,
                        person2Name : person2Name,
                        person2RiskScore: person2RiskScore,
                        person3Name : person3Name,
                        person3RiskScore: person3RiskScore,
                    }
                }
                else {
                    return {
                        error: json['error']
                    }
                }

                
            });

    return x
}


import { useHistory } from 'react-router-dom';
import { useState } from 'react'

export default function Login(props) {
    const history = useHistory();
    const [email, setEmail] = useState("login-email")
    const [password, setPassword] = useState("login-password")

    const attemptLogin = (event) => {
        event.preventDefault();





        // Christopher code:
        var data = { "email": email, "password": password };
        var x = fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json()
            })
            .then((json) => {
                console.log(json)

                var error = json["error"]
                var token = json["token"]

                if ( error == false )
                {
                    // The user logged in successfully 

                    window.localStorage.setItem("Token", token);

                    // Lets get some user information
                    var userData = json["userData"]
                    var name = userData["name"]
                    var numPersons = userData["numPersons"]
                    var state = userData["state"]
                    // There is lots more userdata to use, like risk score, etc

                }
                else 
                {
                    console.log(error)
                    // The user did not login succesfully
                    // So error contains a string like "password is not correct" or "connection issues to MongoDB"
                   // Display the error to the user
                }

                // Then redirect to next page

            });

        history.push("/");
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <form>
            <label>Email:</label>
            <input type="text" name="name" onChange={changeEmail} />
            <br />
            <label>Password:</label>
            <input type="text" name="password" onChange={changePassword} />
            <br />
            <input type="submit" value="LOGIN" onClick={attemptLogin} />
            <input type="submit" value="REGISTER" onClick={() => {
                history.push("/register");
            }} />
        </form>
    )
}

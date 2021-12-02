import { useHistory } from 'react-router-dom';
import { useState } from 'react'

export default function Login(props) {
    const history = useHistory();
    const [email, setEmail] = useState("login-email")
    const [password, setPassword] = useState("login-password")

    const attemptLogin = (event) => {
        event.preventDefault();
        // Connect to the backend to check if the user is in our database
        // let data = {};
        // var data = { "Email": Email, "Pass": Pass };
        // var x = fetch('http://127.0.0.1:5000/login', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then((json) => {
        //         var token = json['Token'];
        //         var error = json['Error'];
        //         if (error != false) {
        //             this.error2 = error
        //             this.forceUpdate()
        //         }
        //         else {
        //             window.localStorage.setItem("Token", token);
        //             // TODO
        //             // Redirect to next window
        //         }
        //     });

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

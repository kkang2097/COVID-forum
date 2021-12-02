import { useHistory } from 'react-router-dom';
import { useState } from 'react'

export default function Register() {
    const history = useHistory();
    const [email, setEmail] = useState("reg-email")
    const [password, setPassword] = useState("reg-password")
    const [zip, setZip] = useState("reg-zip")

    const attemptRegister = (event) => {
        event.preventDefault();
        // Connect to the backend to check if the data is valid
        // let data = {};
        // var x = fetch('http://127.0.0.1:5000/newAcct', {
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
        //             console.log(token)
        //             // Move to next window
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
    const changeZip = (event) => {
        setZip(event.target.value)
    }

    return (
        <form>
            <label>Email:</label>
            <input type="text" name="email" onChange={changeEmail} />
            <br />
            <label>Password:</label>
            <input type="text" name="password" onChange={changePassword} />
            <br />
            <label>Zip Code:</label>
            <input type="text" name="zip" onChange={changeZip} />
            <br />
            <input type="submit" value="REGISTER" onClick={attemptRegister} />
        </form>
    )
}

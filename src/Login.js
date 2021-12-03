import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { call } from './Call.js'


export default function Login(props) {
    const history = useHistory();
    const [email, setEmail] = useState("login-email")
    const [password, setPassword] = useState("login-password")

    const attemptLogin = (event) => {
        event.preventDefault();





        // Christopher code:
        var data = { "email": email, "password": password };
        data = {"token": window.localStorage.getItem("Token")}
        call("auth", data)

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

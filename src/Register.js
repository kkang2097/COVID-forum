import { useHistory } from 'react-router-dom';
import { useState } from 'react'

import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";

export default function Register() {
    const history = useHistory();
    const [email, setEmail] = useState("reg-email")
    const [name, setName] = useState("reg-name")
    const [password, setPassword] = useState("reg-password")
    const [stateabbrv, setstateabbrv] = useState("reg-stateabbrv")


    const [{  }, dispatch] = useDataLayerValue();
    const attemptRegister = (event) => {
        event.preventDefault();
         
        var data = { "email": email, "password": password, "name": name, "state": stateabbrv, "emailUpdates": 1 };
        var json = Call("newAcct", data)
        .then((response => {
            console.log(response)
            dispatch(response);

            if (response.error == false) {
                console.log("create Acct successful")
            }
            else {
                console.log(response.error)
            }
        }))
        
        history.push("/");
    }

    const changeName = (event) => {
        setName(event.target.value)
    }
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    const changestateabbrv = (event) => {
        setstateabbrv(event.target.value)
    }

    return (
        <form>
            <label>Name:</label>
            <input type="text" name="name" onChange={changeName} />
            <br />
            <label>Email:</label>
            <input type="text" name="email" onChange={changeEmail} />
            <br />
            <label>Password:</label>
            <input type="text" name="password" onChange={changePassword} />
            <br />
            <label>State Abbreviation (example: CA):</label>
            <input type="text" name="stateabbrv" onChange={changestateabbrv} />
            <br />
            <input type="submit" value="REGISTER" onClick={attemptRegister} />
        </form>
    )
}

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
        

        <div class="center">
      <h1>Live Laugh Love ;)</h1>
      <form method="post">
        <div class="txt_field">
        <input type="text" name="name" onChange={changeName} />
          <span></span>
          <label>First Name</label>
        </div>
        <div class="txt_field">
        <input type="email" name="password" onChange={changeEmail} />
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
        <input type="password" name="password" onChange={changePassword} />
          <span></span>
          <label>Password</label>
        </div>
        <div class="txt_field">
        <input type="text" name="password" onChange={changestateabbrv} />
          <span></span>
          <label>State CA TX (make this a dropdown menu)</label>
        </div>
        <input type="submit" value="Create Account" onClick={attemptRegister} />
        &nbsp;
      </form>
    </div>





    )
}

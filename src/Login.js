import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";
import './css/App.css'




export default function Login(props) {



    const history = useHistory();
    const [email, setEmail] = useState("login-email")
    const [password, setPassword] = useState("login-password")





    // CHRISTOPHERS CODE
    const [{  }, dispatch] = useDataLayerValue();

    const attemptLogin = (event) => {
        event.preventDefault();
         
        var data = { "email": email, "password": password };
        console.log(data)
        var json = Call("login", data)
        .then((response => {

            dispatch(response);
            if (response.error == false) {
                console.log("login successful")
            }
            else {
                console.log(response.error)
            }
        }))
        
    // END CHRISTOPHER CODE

        history.push("/riskscores");
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    return (









<div class="center">
      <h1>Login</h1>
      Use the following:
      &nbsp;
      chris@humphrey.com 
      &nbsp;
      12345678
      <form method="post">
        <div class="txt_field">
        <input type="text" name="name" onChange={changeEmail} />
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
        <input type="text" name="password" onChange={changePassword} />
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="LOGIN" onClick={attemptLogin} />
        <div class="signup_link">
          Not a member? <a href="register">Signup</a>
        </div>
      </form>
    </div>

    )
}



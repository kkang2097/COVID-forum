import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";
import './css/login.css'
import Header from './Header'




export default function Login(props) {


  const history = useHistory();
  const [email, setEmail] = useState("login-email")
  const [password, setPassword] = useState("login-password")



  // CHRISTOPHERS CODE
  const [{ }, dispatch] = useDataLayerValue();

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

    history.push("/coviddashboard"); // Sunny: how about redirecting to home?
  }

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }
  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  return (

    /* Use the following to login:
      chris@humphrey.com
      12345678 */

    < div className="acct-content" >
      {Header("Login")}
      <form className="basic-form" method="post">
        <div className="txt_field">
          <label>Username</label>
          <input type="text" name="Name" onChange={changeEmail} />
        </div>
        <div className="txt_field">
          <label>Password</label>
          <input type="password" name="Password" onChange={changePassword} />
        </div>
        <input type="submit" value="Sign In" className="submit-button"
        onClick={e=> {
          if(email=="login-email" || password=="login-password"){
            console.log("No valid login/password provided");
          }
         else{
           attemptLogin;
         }
        } />
        <br />
        <div>
          Not a member? <a href="register">Sign Up Here!</a>
        </div>
      </form>
    </div >
  )
}

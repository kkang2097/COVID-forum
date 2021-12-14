import { useHistory } from 'react-router-dom';
import { useState } from 'react'

import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";
import './css/login.css';
import Header from './Header.js';

export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("reg-email")
  const [name, setName] = useState("reg-name")
  const [password, setPassword] = useState("reg-password")
  const [stateabbrv, setstateabbrv] = useState("reg-stateabbrv")
  const [emailUpdates, setEmailUpdates] = useState("0")


  const [{ }, dispatch] = useDataLayerValue();
  const attemptRegister = (event) => {
    event.preventDefault();

    var data = { "email": email, "password": password, "name": name, "state": stateabbrv, "emailUpdates": emailUpdates };
    console.log(data)
    var json = Call("newAcct", data)
      .then((response => {
        console.log(response)
        dispatch(response);

        if (response.error == false) {
          console.log("create Acct successful")
          history.push("/coviddashboard");
        }
        else {
          console.log(response.error)
          history.push("/register");
        }
      }))

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

  const changeEmailUpdates = (event) => {
    setEmailUpdates(event.target.value)
  }

  return (
    <div className="acct-content" >
      {Header("Register")}
      <form className="basic-form" method="post">
        <div class="txt_field">
          <p>First Name</p>
          <input type="text" name="Name" onChange={changeName} />
          <span></span>
        </div>

        <div class="txt_field">
          <p>Email</p>
          <input type="email" name="Email" onChange={changeEmail} />
          <span></span>
        </div>

        <div class="txt_field">
          <p>Password</p>
          <input type="password" name="Password" onChange={changePassword} />
          <span></span>
        </div>

        <div class="txt_field">
          <p>State (example: CA TX)</p>
          <input type="text" name="State" onChange={changestateabbrv} />
          <span></span>
        </div>

        <div >
          <p>Recieve Email Updates on Your Local Covid Situation</p>
          <input type="checkbox" id="Recieve Email Updates" name="Recieve Email Updates" value="1" onChange={changeEmailUpdates} />
        </div>

        <div>
          <input type="submit" value="Create Account" onClick={attemptRegister} />
        </div>
      </form>
    </div>





  )
}

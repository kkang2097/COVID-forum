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
        <div className="txt_field">
          <label>First Name</label>
          <input type="text" name="Name" onChange={changeName} />
        </div>

        <div className="txt_field">
          <label>Email</label>
          <input type="email" name="Email" onChange={changeEmail} />
        </div>

        <div className="txt_field">
          <label>Password</label>
          <input type="password" name="Password" onChange={changePassword} />
        </div>

        <div className="txt_field">
          <label>State</label>
          <select onChange={changestateabbrv}>
            <option disabled selected value> -- select -- </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <br />
        <div >
          <label>Recieve Email Updates on Your Local Covid Situation</label>
          <input type="checkbox" id="Recieve Email Updates" name="Recieve Email Updates" value="1" onChange={changeEmailUpdates} />
        </div>
        <br />
        <div>
          <input type="submit" value="Create Account" className="submit-button" onClick={attemptRegister} />
        </div>
      </form>
    </div>





  )
}

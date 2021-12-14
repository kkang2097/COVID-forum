import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";
import './css/login.css'
import facemask from './images/maskwear_background.jpg';




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

        history.push("/coviddashboard");
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    return (



<div class="center">
      {/* Use the following:
      &nbsp;
      chris@humphrey.com 
      &nbsp;
      12345678 */}
      <title>Login Design</title>
      <link rel="stylesheet" type="src/css" href="App.css"></link>
      <body>
        <img src={facemask} alt="facemask background" width={1904} height={1000}>
        </img>
        
          
          
      <form className="Loginform" method="post">
        <div>
        <h1>Login Here</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div class="txt_field">
          <p>Username</p>
        <input type="text" name="Name" onChange={changeEmail} />
          <span></span>
          
        </div>
        <div class="txt_field">
          <p>Password</p>
        <input type="password" name="Password" onChange={changePassword} />
          <span></span>
          
        </div>
        <input type="submit" value="Login" onClick={attemptLogin} />
        <br></br>
        <br></br>
        <div class="signup_link">
          Not a member? <a href="register">Signup</a>
        </div>
      </form>
      
      </body>
    </div>

    )
}



import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";



export default function Login(props) {



    const history = useHistory();
    const [email, setEmail] = useState("login-email")
    const [password, setPassword] = useState("login-password")





    // CHRISTOPHERS CODE
    const [{  }, dispatch] = useDataLayerValue();

    const attemptLogin = (event) => {
        event.preventDefault();
         
        var data = { "email": email, "password": password };
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

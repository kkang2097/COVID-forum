import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";



export default function Login(props) {

    const history = useHistory();
    const [name, setName] = useState("name")
    const [age, setAge] = useState("age")
    const [sex, setSex] = useState("sex")
    const [stateavvrb, setStateavvrb] = useState("stateavvrb")
    const [vaccine, setVaccine] = useState("vaccine")
    const [race, setRace] = useState("race")
    const [smoke, setSmoker] = useState("smoker")
    const [heightFeet, setHeightFeet] = useState("heightFeet")
    const [heightInches, setHeightInches] = useState("heightInches")
    const [heartLung, setHeartLung] = useState("heartLung")
    const [mask, setMask] = useState("mask")
    const token = window.localStorage.getItem("Token")
    

    // CHRISTOPHERS CODE
    const [{ numPersons }, dispatch] = useDataLayerValue();

    const attemptLogin = (event) => {
        event.preventDefault();
         
        var data = { "token": token, "name": name, "age": age, "sex": sex, "state": stateavvrb, "vaccine": vaccine, "race": race, "smoker": smoke, "heightFeet": heightFeet, "heightInches": heightInches, "heartLung": heartLung, "mask": mask };
        var json = Call("addPerson", data)
        .then((response => {

            dispatch(response);
            if (response.error == false) {
                console.log("add person successful")
                history.push("/riskscores");
            }
            else {
                console.log(response.error)
            }
        }))
        
    // END CHRISTOPHER CODE

        history.push("/");
    }

    const changeName = (event) => {
        setName(event.target.value)
    }
    const changeAge = (event) => {
        setAge(event.target.value)
    }
    const changestateavvrb = (event) => {
        setStateavvrb(event.target.value)
    }
    const changevaccine = (event) => {
        setVaccine(event.target.value)
    }
    const changeRace = (event) => {
        setRace(event.target.value)
    }
    const changesmoke = (event) => {
        setSmoker(event.target.value)
    }
    const changeheightfeet = (event) => {
        setHeightFeet(event.target.value)
    }
    const changeheightin = (event) => {
        setHeightInches(event.target.value)
    }
    const changeheart = (event) => {
        setHeartLung(event.target.value)
    }
    const changemask = (event) => {
        setMask(event.target.value)
    }

    if (numPersons > 2){
        return ( <div>already reached max number of people, which is 3 </div>)
    }
    else {
    return (
        <form>
            <label>Persons Name:</label>
            <input type="text" name="name" onChange={changeName} />
            <br />
            <label>Age:</label>
            <input type="text" name="name" onChange={changeAge} />
            <br />
            <label>State Abbreviation:</label>
            <input type="text" name="name" onChange={changestateavvrb} />
            <br />
            <label>Vaccines (0,1,2):</label>
            <input type="text" name="name" onChange={changevaccine} />
            <br />
            <label>Race (1,2,3,4):</label>
            <input type="text" name="name" onChange={changeRace} />
            <br />
            <label>Smoker (0, 1):</label>
            <input type="text" name="name" onChange={changesmoke} />
            <br />
            <label>Height Feet:</label>
            <input type="text" name="name" onChange={changeheightfeet} />
            <br />
            <label>Height Inch:</label>
            <input type="text" name="password" onChange={changeheightin} />
            <br />
            <label>Heart or Lung Disease (0 or 1):</label>
            <input type="text" name="password" onChange={changeheart} />
            <br />
            <label>Mask Wearing (0, 1 ,2)</label>
            <input type="text" name="password" onChange={changemask} />
            <br />
            <input type="submit" value="Add Person" onClick={attemptLogin} />
        </form>
    
    ) }
}

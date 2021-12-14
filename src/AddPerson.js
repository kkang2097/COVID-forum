import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";



export default function AddingPerson(props) {

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
        console.log(data)
        var json = Call("addPerson", data)
        .then((response => {

            dispatch(response);
            if (response.error == false) {
                console.log("add person successful")
                history.push("/coviddashboard");
            }
            else {
                console.log(response.error)
            }
        }))
        
    // END CHRISTOPHER CODE

        history.push("/coviddashboard");
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
        return null
    }
    else {
    return (
        <form className="addPersonForm" method="post">


            <p>Persons Name</p>
            <input type="text" name="Name" onChange={changeName} />
            <br />
            <span></span>


            <p>Age</p>
            <input type="text" name="Age" onChange={changeAge} />
            <br />


            <p>State Abbreviation (CA TX)</p>
            <input type="text" name="State" onChange={changestateavvrb} />
            <br />

            <p>Height in Feet</p>
            <input type="text" name="HF" onChange={changeheightfeet} />
            <br />


            <p>Height Inches</p>
            <input type="text" name="HI" onChange={changeheightin} />
            <br />

            <select name="Vaccine" id="Vaccine" onChange={changevaccine} >
            <option value="2">Fully Vaxxed</option>
            <option value="1">Initial Dose</option>
            <option value="0">No Vax</option>
            </select>
            <br />


            <select name="Race" id="Race" onChange={changeRace} >
            <option value="1">White</option>
            <option value="0">Black</option>
            <option value="2">Latino</option>
            <option value="3">Native American</option>
            <option value="4">Asian</option>
            </select>
            <br />
            
            <select name="Smoke" id="Smoke" onChange={changesmoke} >
            <option value="0">Not A Smoker</option>  
            <option value="1">Smoker</option>
            </select>          
            <br />


 


            <select name="Smoke" id="Smoke" onChange={changeheart} >
            <option value="0">Not Heart/Lung Disease</option>  
            <option value="1">Diagnosed Heart/Lung Disease</option>
            </select>          
            <br />            

            <select name="Mask" id="Mask" onChange={changemask} >
            <option value="1">Never Wear Mask</option>  
            <option value="2">Rarely Wear Mask</option>
            <option value="3">Sometimes Wear Mask</option>
            <option value="4">Usually Wear Mask</option>
            <option value="5">Always Wear Mask</option>
            </select>          
            <br />

            <br />
            <input type="submit" value="Add Person" onClick={attemptLogin} />
        </form>
    
    ) }
}

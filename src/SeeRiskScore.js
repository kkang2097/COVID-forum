import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";
import './css/App.css'




export default function SeeRiskScore(props) {
    const history = useHistory();
    const [deletePerson, setDeletePerson] = useState("deletePerson")
    const deletePersonFunc = (event) => {
        setDeletePerson(event.target.value)

    }
    const [{ person1RiskScore, person1Name, person2RiskScore, person2Name, person3RiskScore, person3Name, numPersons }, dispatch] = useDataLayerValue();



    const attemptDelete = (event) => {
    var data = { "token": window.localStorage.getItem("Token"), "personToRemove": deletePerson };
    console.log(data)
        console.log(data)
        var json = Call("removePerson", data)
        .then((response => {

            dispatch(response);
            if (response.error == false) {
                console.log(response)
                console.log("deleted person successfully")
                           }
            else {
                console.log(response.error)
            }
            
        }))

        history.push("/")
    }

    if (numPersons == 3) {
        return (
            <div>
            <div>Person 1: {person1Name} has a risk score of {person1RiskScore}</div>
            <div>Person 2: {person2Name} has a risk score of {person2RiskScore}</div>
            <div>Person 3: {person3Name} has a risk score of {person3RiskScore}</div>
            <form method="post">
            <label>Select person to delete 1,2,3:</label>
            <input type="text" name="delete" onChange={deletePersonFunc} />
            <input type="submit" value="delete" onClick={attemptDelete} />
            </form>
            </div>)
    }

    if (numPersons == 2) {
        return (
            <div>
            <div>Person 1: {person1Name} has a risk score of {person1RiskScore}</div>
            <div>Person 2: {person2Name} has a risk score of {person2RiskScore}</div>
            <form method="post">
            <label>Select person to delete 1,2:</label>
            <input type="text" name="delete" onChange={deletePersonFunc} />
            <input type="submit" value="delete" onClick={attemptDelete} />
            </form>
            </div>)
    }

    if (numPersons == 1) {
        return (
            <div>
            <div>Person 1: {person1Name} has a risk score of {person1RiskScore}</div>

            <form method="post">
            <label>Select person to delete (type 1):</label>
            <input type="text" name="delete" onChange={deletePersonFunc} />
            <input type="submit" value="delete" onClick={attemptDelete} />
            </form>
            </div>)
    }
    else {
        return (
            <div>
            <div>There aren't any people!</div>
            </div>)
    }


    





    
}

import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";
import './css/App.css'
import './css/login.css'




export default function SeeRiskScore(props) {
    const history = useHistory();
    const [deletePerson, setDeletePerson] = useState("deletePerson")

    const deletePerson1Func = (event) => {
        attemptDelete("1")
    }

    const deletePerson2Func = (event) => {
        attemptDelete("2")
    }

    const deletePerson3Func = (event) => {
        attemptDelete("3")
    }

    const [{ person1RiskScore, person1Name, person2RiskScore, person2Name, person3RiskScore, person3Name, numPersons }, dispatch] = useDataLayerValue();



    const attemptDelete = (removethisdude) => {
    var data = { "token": window.localStorage.getItem("Token"), "personToRemove": removethisdude };
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

    console.log("num" + numPersons)
    const getPersons = () => {
        if (numPersons == 3) {
        return (<div className="displayscores">

            <h2>Based on current case data by state, and demographic data, we have concluded that:</h2>
            &nbsp;

            <div><h2>{person1Name} has a risk score of {person1RiskScore}</h2></div>
            <span></span>
            <input type="button" value="Delete Person" onClick={deletePerson1Func} />
            &nbsp;
            <div><h2>{person2Name} has a risk score of {person2RiskScore}</h2></div>
            <input type="button" value="Delete Person" onClick={deletePerson2Func} />
            &nbsp;
            <div><h2>{person3Name} has a risk score of {person3RiskScore}</h2></div>
            <input type="button" value="Delete Person" onClick={deletePerson3Func} />

            &nbsp;
            <p>*Max of 3 people allowed</p>

            </div>)}
        if (numPersons == 2) {
            return (<div className="displayscores">

<h2>Based on current case data by state, and demographic data, we have concluded that:</h2>
&nbsp;

                <div><h2>{person1Name} has a risk score of {person1RiskScore}</h2></div>
                <span></span>
                <input type="button" value="Delete Person" onClick={deletePerson1Func} />
                &nbsp;

                <div><h2>{person2Name} has a risk score of {person2RiskScore}</h2></div>
                <input type="button" value="Delete Person" onClick={deletePerson2Func} />


                </div>)}
        if (numPersons == 1) {
            return (<div className="displayscores">

<h2>Based on current case data by state, and demographic data, we have concluded that:</h2>
&nbsp;

                <div><h2>{person1Name} has a risk score of {person1RiskScore}</h2></div>
                <input type="button" value="Delete Person" onClick={deletePerson1Func} />

                <span></span>
                </div>)}
        else {
            return (<div className="displayscores"> <center><h2>Add a Person to See a Risk Score</h2></center>
                </div>)}
        
        
        }


        return (
            <div>
            {getPersons()}
            <form method="post">

            {/* <input type="text" name="delete" onChange={deletePersonFunc} />
            <input type="submit" value="delete" onClick={attemptDelete} /> */}
            </form>
            </div>)
    


    





    
}

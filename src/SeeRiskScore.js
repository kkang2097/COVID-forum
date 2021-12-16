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

        history.push("/coviddashboard")
    }

    console.log("num" + numPersons)
    const getPersons = () => {
        if (numPersons == 3) {
            return (
                <div className="basic-form">
                    <p>*Max of 3 people allowed</p>
                    <br />
                    <br />
                    <h2>Based on current case data by state, and demographic data, we have concluded that:</h2>
                    <br />
                    <br />
                    <div>
                        <h2>{person1Name} has a risk score of {person1RiskScore}</h2>
                        <input type="button" value="Delete Person" className="submit-button" onClick={deletePerson1Func} />
                    </div>
                    <br />
                    <br />
                    <div>
                        <h2>{person2Name} has a risk score of {person2RiskScore}</h2>
                        <input type="button" value="Delete Person" className="submit-button" onClick={deletePerson2Func} />
                    </div>
                    <br />
                    <br />
                    <div>
                        <h2>{person3Name} has a risk score of {person3RiskScore}</h2>
                        <input type="button" value="Delete Person" className="submit-button" onClick={deletePerson3Func} />
                    </div>
                </div>)
        }
        if (numPersons == 2) {
            return (
                <div className="basic-form">
                    <h2>Based on current case data by state, and demographic data, we have concluded that:</h2>
                    <br />
                    <br />
                    <div>
                        <h2>{person1Name} has a risk score of {person1RiskScore}</h2>
                        <input type="button" value="Delete Person" className="submit-button" onClick={deletePerson1Func} />
                    </div>
                    <br />
                    <br />
                    <div>
                        <h2>{person2Name} has a risk score of {person2RiskScore}</h2>
                        <input type="button" value="Delete Person" className="submit-button" onClick={deletePerson2Func} />
                    </div>
                </div>)
        }
        if (numPersons == 1) {
            return (
                <div className="basic-form">
                    <h2>Based on current case data by state, and demographic data, we have concluded that:</h2>
                    <br />
                    <br />
                    <div>
                        <h2>{person1Name} has a risk score of {person1RiskScore}</h2>
                        <input type="button" value="Delete Person" className="submit-button" onClick={deletePerson1Func} />
                    </div>
                </div>)
        }
        else {
            return (
                <div className="basic-form">
                    <h2>Add a Person to See a Risk Score</h2>
                </div>)
        }


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

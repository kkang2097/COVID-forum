import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import SeeRiskScore from './SeeRiskScore';
import AddPerson from './AddPerson';
import './css/login.css'
import facemask from './images/maskwear_background.jpg';



export default function CovidDashboard(props) {
    return (
        


      <div>
      <body className="backg-image">
        
        {/* <link rel="stylesheet" type="src/css" href="App.css"></link>
        <body>
        <img src={facemask} alt="facemask background" width={1904} height={1000}></img>
 */}

        {/* <div className="Loginform" method="post"> */}
        &nbsp;
        &nbsp;
        &nbsp;
        <AddPerson />
        &nbsp;
        &nbsp;
        <SeeRiskScore />
        {/* </div> */}
        {/* <div className="Loginform" method="post"> */}
        
        {/* </div> */}
        {/* </body> */}
    
        </body>
        </div>

    )
    }
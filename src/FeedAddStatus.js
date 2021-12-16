import {React, useState} from 'react';
import { Call } from './Call.js';
import { useDataLayerValue } from "./DataLayer";


function FeedAddStatus(handleAddStatus) {

  const [message, setMessage] = useState();
  const [city, setCity] = useState();
  //Redux portion
  const [{ }, dispatch] = useDataLayerValue();

  //On component initial load
  /*
  useEffect(
    () => {
      //Code Here

    }
  ,[]);
  */
  function handleAddStatus(){
    //Code removed because it caused bugs

  }




  return(
    <div className = "add-feed-status">
      <textarea type = "text" id = "message" value = {message}
      placeholder = "If you have COVID-19, share your experience!"
      onChange = {e => {setMessage(e.target.value)} }/>
      <input type="text" id="city" value = {city}
      placeholder="City (Name)"
      onChange = {e => (setCity(e.target.value))}/>
      <button class='search' onClick = {e => {
        handleAddStatus()
      } }>Add Status</button>
    </div>

  );
}

export default FeedAddStatus;

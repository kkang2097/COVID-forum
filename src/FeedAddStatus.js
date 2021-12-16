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
    const data = {
      "message": message,
      "city": city
    };
<<<<<<< Updated upstream
    Call("addChat", data)
    .then((response => {
=======
    var json = Call("addChat", data)
    .then(response => {
      dispatch(response);
>>>>>>> Stashed changes
        if (response.error == false) {
            console.log("ADDED STATUS UPDATE");
        }
        else {
            console.log(response.error);
        }
    }));
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

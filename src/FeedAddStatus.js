import React from 'react';
import { Call } from './Call.js';

function FeedAddStatus() {

  //On component initial load
  /*
  useEffect(
    () => {
      //Code Here

    }
  ,[]);
  */
  function handleAddStatus(){
    const message = document.getElementById("message");
    const city = document.getElementById("city");
    const state = document.getElementById("state");

    const data = {
      "message": message,
      "city": city,
      "state": state
    };
    Call("addChat", data)
    .then((response => {
        dispatch(response);
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
      <input type = "text" id = "message"
      placeholder = "If you have COVID-19, share your experience!"/>

      <input type="text" id="city" placeholder="City (Name)"/>
      <input type="text" id="state" placeholder="State (Name)"/>
      <button onClick = {e => {
        handleAddStatus()
      } }>Add Status</button>
    </div>

  );
}

export default FeedAddStatus;

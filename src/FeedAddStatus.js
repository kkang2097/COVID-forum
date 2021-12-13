import React from 'react';

function FeedAddStatus(updateStatus) {

  //On component initial load
  /*
  useEffect(
    () => {
      //Code Here

    }
  ,[]);
  */

  return(
    <div className = "add-feed-status">
      <select name = "dropdown">
        <option value = "location" selected>Location</option>
        <option value = "status">Status</option>
      </select>
      <input type = "text" placeholder = "Search..."/>
    </div>

  );
}




export default FeedAddStatus;

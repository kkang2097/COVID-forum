import React from 'react';

function FeedAddStatus(updateStatus) {

  //On component initial load
  useEffect(
    () => {
      //Code Here

    }
  ,[]);

  return(
    <div className = "add-feed-status">
      <select name = "dropdown">
        <option value = "Location" selected>Computer Architecture</option>
        <option value = "Status">Java</option>
      </select>
      <input type = "text" placeholder = "Search..."/>
    </div>

  );
}




export default FeedAddStatus;

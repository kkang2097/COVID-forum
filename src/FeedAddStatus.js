import React from 'react';

function FeedAddStatus(updateStatus, handleSearch) {

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
      <select name = "dropdown" id = "filterType">
        <option value = "location" selected>Location (By Name)</option>
        <option value = "status">Status</option>
      </select>
      <input type = "text" id = "query" placeholder = "Search..."/>
      <button onClick = {e => {handleSearch(
        document.getElementById("filterType"),
        document.getElementById("query")
      )} }>Search</button>
    </div>

  );
}

export default FeedAddStatus;

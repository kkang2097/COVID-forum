import React from 'react';
import './elliot/feed.css';

function Card(item){


  function buttonClick() {
    console.log(item["item"]["age"]);
  }

  return(
    <div className = "Card">CARD
    <p className = "text-line">
    {item["item"]["age"]}, {item["item"]["gender"]}, {item["item"]["location"]}
    </p>
    <p className = "text-line">
    {item["item"]["body"]}
    </p>
    </div>
  );
}

export default Card;

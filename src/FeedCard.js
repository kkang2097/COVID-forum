import React from 'react';
import './css/feed-luke.css';

function Card(item) {


  function buttonClick() {
    console.log(item["item"]["age"]);
  }

  return (
    <div className="Card">
      <span className="title"></span>
      {/* front */}
      <div className="waper">
        <p className="text-line">
          {/* added a span to adjust front size */}
          <span className="text">{item["item"]["age"]}</span>
          <span className="text">{item["item"]["gender"]}</span>
          <span className="text">{item["item"]["location"]}</span>
        </p>
        <p className="text-line">
          {item["item"]["body"]}
        </p>
      </div>
    </div>
  );
}

export default Card;

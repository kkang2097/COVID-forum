import React, {useState, useEffect} from 'react';
import FeedCard from './FeedCard';
import FeedAddStatus from './FeedAddStatus';
import './css/feed-luke.css';

function Feed() {
  //Data for feed
  var [data, setData] = useState([]);
  //Current index inside MongoDB feed collection
  const [index, setIndex] = useState(0);

//Handling a scroll-down or up
function handleScroll() {
  if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
  console.log('Fetch more list items!');
  //Add to data set here:
  //setData(data + [newdata]);
}

useEffect(() => {
  //We would set the data to whatever our initial data load would be
  try{
    setData([
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"}
    ]);
  }
  catch(error){
    console.log(error);
  }

  //Our infinite scrolling event listener
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);

}, []);


//Rendering portion
  return(
    <div className = "Feed">
      <a>FEED-ADD-STATUS</a>
        <FeedAddStatus updateStatus = {//update-status function}/>
      <a>FEED</a>
      {
        data.map(
        item => <
        FeedCard item = {item}
        />
      )

    }
    </div>
  );
}


export default Feed;

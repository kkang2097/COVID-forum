import React, {useState, useEffect} from 'react';
import FeedCard from './FeedCard';
import FeedAddStatus from './FeedAddStatus';
import FeedSearch from './FeedSearch';
import { Call } from './Call.js';
import './css/feed-luke.css';

function Feed() {
  //Data for feed
  var [data, setData] = useState([]);
  var [currentFeed, setCurrentFeed] = useState([]);
  //Current index inside MongoDB feed collection
  const [index, setIndex] = useState(0);

//Handling a scroll-down or up
function handleScroll() {
  if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
  console.log('Fetch more list items!');
  //Add to data set here:
  //setData(data + [newdata]);
}

function handleSearch(type, query){

  //Async function to get search results from mongoDB

}

useEffect(() => {
  //We would set the data to whatever our initial data load would be
  try{
    setData([
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: " feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: " feeling good"}
    ]);
    setCurrentFeed([
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: " feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: "not feeling good"},
      {age: 99, gender: "m", location: "dallas, texas", body: " feeling good"}
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
      <a>ADD-STATUS</a>
      <FeedAddStatus />
      <a>FEED-SEARCH</a>
        <FeedSearch updateStatus = {"hello"} handleSearch = {handleSearch} />
      <a>FEED</a>
      {
        //Show current Feed
        currentFeed
        .map(item => <FeedCard item = {item}/>)
    }
    </div>
  );
}


export default Feed;

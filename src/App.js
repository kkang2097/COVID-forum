import { React, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Feed from './Feed';


import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";
import { useEffect } from "react";

function App() {





  // LETS CHECK IF USER IS ALREADY LOGGED IN
  // CHRISTOPHERS CODE
  const [{  isLoggedIn }, dispatch] = useDataLayerValue();
  useEffect(() => {
     
      if ( isLoggedIn) {
        console.log("User Already Logged In!")
      }
      else {
        
            var data = {"token": window.localStorage.getItem("Token")}
            var json = Call("auth", data)
            .then((response => {

                dispatch(response);
                if (response.error == false) {
                    console.log("User Already Logged In!")
                }
                else {
                    console.log(response.error)
                }
            }))
          }
          }, [isLoggedIn, dispatch]);
  // END CHRISTOPHERS CODE

 
  return (


    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/feed" component={Feed}></Route>
        {/* <Route path="/qa" component={}></Route> */}
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>

  );
}

export default App;

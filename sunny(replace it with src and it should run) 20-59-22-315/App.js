import { React } from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        {/* <Route path="/feed" component={}></Route>
        <Route path="/qa" component={}></Route> */}
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import React from "react";
import {  Route, Link } from "react-router-dom";
import Home from './Home'





/// INITIAL STATES ///
const initialFormValues = {
  //// DROPDOWN ////

}


const App = () => {
  return (
    <div classname='App'>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
        </div>
      </nav>

      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
};
export default App;

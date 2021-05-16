import './App.css';
import React, { useState, useEffect } from 'react'
import {  Route, Link } from "react-router-dom";
import Home from './Home'
import OrderForm from './orderForm'
import axios from 'axios'





/// INITIAL STATES ///
const initialFormValues = {
  //// DROPDOWN ////
  size: '',
  //// RADIO BUTTONS - Types of Sauce ////
  sauce: '',
  //// CHECKBOXES - TOPPINGS ////
  pepperoni: false,
  chicken: false,
  ham: false,
  banana_pepper: false,
  onions: false,
  green_pepper: false,
  diced_tomatoes: false,
  spinach: false,
  pineapple: false,
  black_olives: false,
  //// TEXT INPUT ////
  instructions: '',
  name: '',
  address: '',
}

const initialFormErrors = {
  size: '',
  sauce: '',
  instructions: '',
  name: '',
  address: '',
}


const App = () => {
  // STATES //
  const [order, setOrder] = useState([])                               // array of order objects
  const [formValues, setFormValues] = useState(initialFormValues)      // object
  const [formErrors, setFormErrors] = useState(initialFormErrors)      // object
  const [disabled, setDisabled] = useState(true)                       // boolean

  // HELPERS //
  const postNewOrder = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(({data}) => {
        setOrder([data, ...order])
        console.log(data)
      })
      .catch(error => console.log("Error Posting Users:", error))
  }





  // EVENT HANDLERS //
  const inputChanges = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = () => {

  }


  // SIDE EFFECT //







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
      <Route path ='/pizza'>
        <OrderForm 
          values = {formValues}
          change = {inputChanges}
          submit = {submitForm}
          disabled = {disabled}
          errors = {formErrors}
        />
      </Route>
    </div>
  );
};
export default App;

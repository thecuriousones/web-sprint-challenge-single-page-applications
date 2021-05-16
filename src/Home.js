import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    const routeToOrder = () => {
        history.push('/pizza')
    }

    return (
        <div className='home-wrapper'>
            <img 
                className='home-image'
                src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                alt='pizza.img'
            />
            <button className='md-button shop-button' onClick={routeToOrder}>
            🍕 Pizza? 🍕
            </button>
        </div>
    )
}







export default Home;
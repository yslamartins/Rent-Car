import React from 'react';
import './logo.css';
import logo from  './logo.svg'

function Logo() {
    return ( 
        <div className="container-logo">
        <img src={logo}/>
        <h2>RENTCAR</h2>
        </div>
     );
}

export default Logo;
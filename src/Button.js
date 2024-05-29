import React from 'react';
import './App.css';

const Button = ({label, onClick}) => {
    return ( 
        <button onClick={onClick}>
        {label}
        </button>
        ); 
}

export default Button;
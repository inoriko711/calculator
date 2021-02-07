import React from 'react';
import './Button.css'


const Button = (props) => {
    return (
        <button
            className="num-button"
        >
            {props.val}
        </button>
    );
}

export default Button;

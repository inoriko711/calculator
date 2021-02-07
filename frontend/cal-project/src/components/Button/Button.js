import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <button
            style={props.buttonStyle}
            className="num-button"
        >
            {props.val}
        </button>
    );
}

export default Button;

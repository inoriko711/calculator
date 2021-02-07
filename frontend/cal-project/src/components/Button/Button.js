import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <button
            style={{ border: `3px solid` + props.buttonStyle }}
            className="num-button"
        >
            {props.val}
        </button>
    );
}

export default Button;

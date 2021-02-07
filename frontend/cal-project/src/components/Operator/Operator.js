import React from 'react';
import './Operator.css'

const Operator = (props) => {
    return (
        <button
            type="button"
            className="operator-button">
            {props.val}
        </button>
    );
}


export default Operator;

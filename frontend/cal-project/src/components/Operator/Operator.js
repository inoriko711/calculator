import React from 'react';

const Operator = (props) => {
    return (
        <input type="button" value={props.val} onclick="edit(this)" />
    );

}


export default Operator;

import React from 'react';


const Button = (props) => {
    return (
        <input type="button" value={props.val} onclick="edit(this)" />
    );
}

export default Button;

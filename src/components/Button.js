import React from "react";

function Button(props) {
    const {id, value, onClick} = props;
    let symbol = value === '/'? "÷": (value === "*" ? "×": value);
    return (
        <button id={props.id} value={props.value} onClick={props.onClick}>
            {symbol}
        </button>
    )
}

export default Button;
import React from "react";

function Screen(props) {
    return(
        <div className="content">
            <input id={props.id} value={props.value} readOnly></input>
        </div>
    )
}

export default Screen;
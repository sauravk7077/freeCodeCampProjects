import React from "react";

function Screen(props) {
    return(
        <div>
            <input id="display" value={props.value} readOnly></input>
        </div>
    )
}

export default Screen;
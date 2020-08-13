import React from "react";
import Screen from "./Screen";

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            formulaInput: '',
            output: ''
        }
    }

    render() {
        return (
            <div>
                <Screen value={this.state.formulaInput}/>
                <div>
                    
                </div>
            </div>
        )
    }
}


export default Container;
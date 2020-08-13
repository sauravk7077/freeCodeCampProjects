import React, { Component } from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";

class App extends React.Component{
    render(){
        return (
            <Container/>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))
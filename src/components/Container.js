import React from "react";
import Screen from "./Screen";
import Button from "./Button";
import "../styles/main.css"

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            formulaInput: '',
            output: '0'
        }
        this.changeInput = this.changeInput.bind(this);
        this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
        this.removePreviousKey = this.removePreviousKey.bind(this);
        this.calculate = this.calculate.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    handleKeyboardInput(e) {
        if(e.keyCode == 13)
            this.calculate();
        else if(e.keyCode === 8)
            this.removePreviousKey();
        else if(!isNaN(e.key) || ["+", "-", "*", "/", "."].includes(e.key))
            this.changeInput(e.key);
        
    }

    clearInput() {
        this.setState({
            formulaInput: '',
            output: '0'
        })
    }

    calculate() {
        this.setState({
            output: eval(this.state.formulaInput)
        });
    }
    
    removePreviousKey(){
        this.setState(state=>({
            formulaInput: state.formulaInput.substring(0, state.formulaInput.length-1)
        }));
    }

    UNSAFE_componentWillMount(){
        document.addEventListener('keydown', this.handleKeyboardInput);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardInput);
    }

    changeInput(key) {
        this.setState(state=>({
            formulaInput: state.formulaInput+key
        }));
    }

    render() {
        const numIdArr = ["one","two","three","four","five","six","seven","eight","nine", "zero"];
        const calcIdArr = [["add", "subtract", "divide", "mutiply", "decimal"], ["+", "-","/","*", "."]]
        const numButtons = numIdArr.map((ele,i)=>(
            <Button
             key={i}
             id={ele}
             value={i!=numIdArr.length-1? i+1 : 0}
             onClick={(e)=>{this.changeInput(i!=numIdArr.length-1? i+1 : 0)}}
             />
        ))
        const calcBtns = calcIdArr[0].map((ele,i)=>(
            <Button key={i} id={ele} value={calcIdArr[1][i]}
                onClick={(e)=>{this.changeInput(calcIdArr[1][i])}}
            />
        ))
        return (
            <div className="container">
                
                
                <div className="Container">
                    <div className="numbers">
                        {numButtons}
                        <Button id="equals" onClick={this.calculate} value="="/>
                    </div>
                    <div className="symbols">
                        {calcBtns}
                        <Button id="clear" onClick={this.clearInput} value="AC"/>
                    </div>
                    <Screen value={this.state.formulaInput} id="formulaDisplay"/>
                    <Screen value={this.state.output} id="display"/>
                </div>
                
            </div>
        )
    }
}


export default Container;
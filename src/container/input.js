import React, { Component } from 'react';
import NumContainer from './NumContainer';

class Input extends Component {

    state={
        EnteredNumber:"",
        manageCounter:""

    }

   
    handleChangeForm=(e)=>
        {
            this.setState({
                EnteredNumber:e.target.value,
                manageCounter:1
               
            })
               e.preventDefault();
        }
       

    render() {
        return (
            <center>
            <div>
                <input type="text" placeholder="Enter here number" name="EnteredNumber" onChange={this.handleChangeForm}/>
                <NumContainer manageCounter={this.state.manageCounter} EnteredNumber={this.state.EnteredNumber}/>
               
               
            </div>
            </center>
        );
    
    }
}

export default Input;
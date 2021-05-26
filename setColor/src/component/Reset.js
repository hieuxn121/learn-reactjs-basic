import React, { Component } from 'react';

class Reset extends Component {
    onResetDefault(value){
        this.props.Reset(value);
     }
    render() {
        return (
            <div>
               <button type="button" className="btn btn-success" onClick={()=>this.onResetDefault(15)}>Reset</button> 
            </div>
        );
    }
}

export default Reset;
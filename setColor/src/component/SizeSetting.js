import React, { Component } from 'react';

class SizeSetting extends Component {
    setSize(value){
        this.props.onChangeSize(value);
    }
    render() {
        return (
            <div>
                <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">Size: {this.props.Init}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={()=> this.setSize(2)}>Increase</button>
                    <button type="button" className="btn btn-success" onClick={()=> this.setSize(-2)}>Decrease</button>
                </div>
            </div>
            </div>
        );
    }
}

export default SizeSetting;
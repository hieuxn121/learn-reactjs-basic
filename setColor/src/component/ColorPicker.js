

import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state ={ 
          colors:['red', 'green' ,'blue','#ccc' ]
        };
    }
    showColor(color){
        return {
            background: color
        };
    }
    setActiveColor(color){
        this.props.onReceiveColor(color);
    }
    render() {
        var elementColor = this.state.colors.map((color,key) =>
        {
            return <span key={key} style={this.showColor(color)}
            className={this.props.color === color ? 'active' :''}
            onClick={()=> this.setActiveColor(color)}
            ></span>
        })
        return (
            <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          
          <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Color picker</h3>
              </div>
              <div className="panel-body">
                {elementColor}
                <hr/>
              </div>
          </div>
        </div>
            </div>
        );
    }
}

export default ColorPicker;
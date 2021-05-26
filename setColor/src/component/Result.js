import React, { Component } from 'react';

class Result extends Component {
    setStyle(){
        return {
            color: this.props.color,
            borderColor:this.props.color,
            fontSize:this.props.Init
        }
    }
    render() {
        return (
            <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color: red - fontsize: {this.props.Init}px</p>
                <div id="content" style={this.setStyle()} >
                  Setting content
                </div>
            </div>
            </div>
        );
    }
}

export default Result;
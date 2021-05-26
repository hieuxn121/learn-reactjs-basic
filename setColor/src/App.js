import React,{Component} from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import Reset from './component/Reset';
import Result from './component/Result';
import SizeSetting from './component/SizeSetting';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color:'red',
      fontSize: 15
    };
    // this.onSetColor= this.onSetColor.bind(this);
}
 onSetColor=(params)=>{
  this.setState({
    color: params
  });
}
onChangeSize=(value)=>{
  value = Number(value);
  if(this.state.fontSize + value >=8 && this.state.fontSize +value <= 36)
  {
    this.setState({
      fontSize: this.state.fontSize + value
    });
  }
}
onSettingDefault=(value)=>{
  value= Number(value);
  this.setState({
    fontSize:value 
  });
}
render(){
  return (
    <div className="container mt-50">
      <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}></ColorPicker>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">   
            <SizeSetting Init={this.state.fontSize} onChangeSize= {this.onChangeSize}></SizeSetting>
            <Reset Reset={this.onSettingDefault}></Reset>
          </div>
          <Result color ={this.state.color} Init={this.state.fontSize}></Result>
      </div>
    </div>
  );
}
}

export default App;

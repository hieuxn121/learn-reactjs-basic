import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useParams
  } from "react-router-dom";
  

class NewItems extends Component {
    constructor(props){
        super(props);
    }
    chuyenDoiURL= (str)=>
  {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
}
    render() {
        return (
             <div className="col-4">
                 <div className="card-deck">
                    <div className="card">
                        <Link to={"/detail-news/"+this.chuyenDoiURL(this.props.tieuDe)+"."+this.props.tinID + ".html"}><img src={this.props.anh} className="img-fluid" alt="" /></Link>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.tieuDe}</h4>
                            <p className="card-text">{this.props.mieuTa}</p>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default NewItems;
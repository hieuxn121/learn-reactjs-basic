import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";
import NewItems from './NewItems';
import dl from './dulieu.json';
class News extends Component {
    render() {
        return (
          <div> 
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">React Router - News</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
      <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/news">Tin tuc</NavLink>
                </li>
                <li>
                <NavLink to="/detail-news">Chi tiet</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
      </div>
    </div>
  </nav>
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Tin tuc</h1>
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger" />
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="button">
                  {/* You can hook the "home button" to some JavaScript events or just remove it */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tin tuc */}
  <div className="container">
    <div className="row mt-3">
      {
        dl.map((value,key)=>{
           return(
            <NewItems tinID={value.id} anh={value.anh} tieuDe={value.tieuDe} mieuTa={value.trichDan} />
          
            )
        }
        )
     }
     <hr/>
    </div>  
  </div>
  </div>
        );
    }
}

export default News;
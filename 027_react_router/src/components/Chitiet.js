import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink, useParams
} from "react-router-dom";
class Chitiet extends Component {
    render() {
        return (
          <div>
  {/* Phan menu */}
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
  <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Chi tiet tin tuc</h1>
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
  <div className="container">
    <div className="row mt-3">
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <a href="chitiet.html"><img src="http://placehold.it/800x400" className="img-fluid" alt="" /></a>
            <blockquote className="blockquote">
              <p>Faucibus ac. Temporibus etiam quam aut venenatis sem pharetra montes, eleifend condimentum, vitae officiis aut, nonummy convallis maecenas occaecati platea enim, qui venenatis harum, iste laoreet fames totam quibusdam nulla eveniet </p>
              <footer className="card-blockquote"><cite title="Source title">From fedu</cite></footer>
            </blockquote>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Chitiet;
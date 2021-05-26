import React,{Component}  from 'react';
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import Chitiet from './Chitiet';
import Contact from './Contact';
import DieuHuongUrl from '../router/DieuHuongUrl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
        <Nav/>
        {/* <Home/> */}
        {/* <News/> */}
        {/* <Chitiet/> */}
        {/* <Contact/> */}
        <DieuHuongUrl/>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;

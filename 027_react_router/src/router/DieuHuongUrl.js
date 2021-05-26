import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useParams
} from "react-router-dom";

import Home from '../components/Home';
import News from '../components/News';
import Chitiet from '../components/Chitiet';
import Contact from '../components/Contact';

class DieuHuongUrl extends Component {
    render() {
        return (
                    <Switch>
                            <Route exact path="/home">
                                <Home />
                            </Route>
                            <Route exact  path="/news">
                                <News />
                            </Route>
                            <Route exact path="/detail-news/:slug.:id.html" children={<Chitiet/>} />
                            <Route exact path="/contact">
                                <Contact />
                            </Route>
                    </Switch>
        );
    }
}
export default DieuHuongUrl;
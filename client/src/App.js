import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import {Layout} from "./Layout/Layout";
import NavigationBar from './components/NavigationBar';
import CartContainer from "./containers/CartContainer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/cart">
                <CartContainer />
              </Route>
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

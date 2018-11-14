import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Employee from './components/Employee';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Fade from 'react-reveal/Fade';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="routes">
          <Router>
            <Route render={({ location }) => (
              <Switch location={location}>
                <Route exact path="/"
                  component={() => <Home/>} />
                <Route path={"/bio"} component={Bio} />
                <Route path={"/employees"} component={Employee} />
              </Switch>
            )} />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

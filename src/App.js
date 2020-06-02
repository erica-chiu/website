import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DancePage from './DancePage';
import HomePage from './HomePage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/dance" component={DancePage}/>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

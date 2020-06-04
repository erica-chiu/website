import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import DancePage from './DancePage';
import HomePage from './HomePage';
import './App.css';
import AppHeader from './AppHeader';


class App extends Component {
  render() {
    return (
        <HashRouter basename="/">
          <div className="app">
            <AppHeader/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/dance" component={DancePage}/>
          </div>
        </HashRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import DancePage from './pages/DancePage';
import ProjectPage from './pages/ProjectPage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import './App.css';
import AppHeader from './components/AppHeader';


class App extends Component {
  render() {
    return (
        <HashRouter basename="/">
          <div className="app">
            <AppHeader/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/projects" component={ProjectPage}/>
            <Route path="/dance" component={DancePage}/>
            <Route path="/blog" component={BlogPage}/>
            <Route path="/blogs/:id" component={BlogPage}/>
          </div>
        </HashRouter>
    );
  }
}

export default App;

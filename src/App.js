import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Router>
        	<Route exact path="/" component={Dashboard}/>
        </Router>
      </div>
    );
  }
}

export default App;

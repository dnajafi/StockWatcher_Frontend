import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import About from './containers/About';
import Contact from './containers/Contact';
import Privacy from './containers/Privacy';
import Terms from './containers/Terms';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Router>
      		<div>
        		<Route exact path="/" component={Dashboard}/>
        		<Route path="/about" component={About}/>
        		<Route path="/contact" component={Contact}/>
        		<Route path="/privacy" component={Privacy}/>
        		<Route path="/terms" component={Terms}/>
        	</div>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Stocks from './containers/Stocks';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />        
        <Stocks />
        <Footer />
      </div>
    );
  }
}

export default App;

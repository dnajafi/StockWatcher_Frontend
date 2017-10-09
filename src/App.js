import React, { Component } from 'react';
import './App.css';
import Stocks from './containers/Stocks';
import logo from './logo.png';
import { Grid, Col, Row, FormControl } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <h1 className="App-title"><b>STOCK</b>WATCHER</h1>
                <img src={logo} className="App-logo" alt="logo" />
              </Col>
              <Col xs={6} md={4}>
                <div className="blockchain-info">
                  <h5>
                    Ethereum: $310.00 (-0.96%) ฿0.06700 (-4.30%) 
                  </h5>
                  <h5>
                    Bitcoin: ฿1 = $4606.26 (+3.05%)
                  </h5>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="search-box">
                  <FormControl
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </header>


        <Stocks />


        <div className="footer">
          <div className="inner">
            <div className="sections">
              <div className="row">
                <div className="four columns">
                  © <b>STOCK</b>WATCHER
                  <span className="spaced" style={{fontSize: 12}}>
                    v0.1.0-alpha
                  </span>
                </div>
                <div className="eight columns" style={{textAlign: "right"}}>
                  <div>
                    <a className="links-padding" href="#">About</a>
                    <a className="links-padding" href="#">Contact</a>
                    <a className="links-padding" href="#">Privacy</a>
                    <a className="links-padding" href="#">Terms</a>
                    <a className="links-padding" href="#">Dashboard</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        
      </div>
    );
  }
}

export default App;

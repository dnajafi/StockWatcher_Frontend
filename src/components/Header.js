import React, { Component } from 'react';
import { Grid, Col, Row, FormControl } from 'react-bootstrap';
import logo from '../logo.png';

class Header extends Component {



	render() {
		return (
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
              <div style={{position: "relative", top: 30, left: 245, fontSize: 17}}>
                <p>Add another stock:</p>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="search-box">
                <FormControl
                  type="text"
                  placeholder="Enter Ticker Symbol"
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
		);
	}
}

export default Header;
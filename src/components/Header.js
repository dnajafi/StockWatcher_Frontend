import React, { Component } from 'react';
import { Grid, Col, Row, FormControl, Button, FormGroup, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import logo from '../logo.png';
import { updateCurrentNewSymbol, saveCurrentNewSymbol } from '../reducers/stocks';
import { fetchBTCPrice } from '../reducers/crypto'

class Header extends Component {

  submitSymbol(evt) {
    evt.preventDefault();
    this.props.saveCurrentNewSymbol(this.props.currentNewSymbol);
  }

  handlerInputChange = (evt)=> {
    this.props.updateCurrentNewSymbol(evt.target.value);
  }

  componentWillMount() {
    this.props.fetchBTCPrice();
  }

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
                  Bitcoin: ฿1 = ${this.props.currentBTCPrice}
                </h5>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div  className="search-box">
                <div style={{float: 'right', with: 100}}>
                  <form onSubmit={(evt) => this.submitSymbol(evt)}>
                    <input
                      style={{color: 'Black'}}
                      type="text"
                      onChange={this.handlerInputChange}
                      placeholder="Enter another symbol"
                      value={this.props.currentNewSymbol}
                    />
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
		);
	}
}

const mapStateToProps = (state) => ({ currentNewSymbol: state.stocks.newSymbol, currentBTCPrice: state.crypto.bitcoin_price });
const mapDispatchToProps = { updateCurrentNewSymbol, saveCurrentNewSymbol, fetchBTCPrice };

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Header);







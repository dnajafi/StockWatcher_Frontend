import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {




	render() {
		return (
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
                  <span style={{margin: 6}}><Link to="/about">About</Link></span>
                  <span style={{margin: 6}}><Link to="/contact">Contact</Link></span>
                  <span style={{margin: 6}}><Link to="/privacy">Privacy</Link></span>
                  <span style={{margin: 6}}><Link to="/terms">Terms</Link></span>
                  <span style={{margin: 6}}><Link to="/">Dashboard</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default Footer;
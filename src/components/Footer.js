import React, { Component } from 'react';


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
		);
	}
}

export default Footer;
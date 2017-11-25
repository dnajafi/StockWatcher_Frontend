import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Privacy extends Component {

	render() {
		return (
			<div>
				<Header />        
        <div>
        	<p>
	        	Privacy - No policy
					</p>
        </div>
				<Footer />
			</div>
		);

	}
}

export default Privacy;
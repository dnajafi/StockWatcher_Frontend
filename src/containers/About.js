import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class About extends Component {

	render() {
		return (
			<div>
				<Header />        
        <div>
        	<p>
	        	About 
	        	StockWatcher brings you the latest on my favorite portfolio of stocks and cryptocurrencies.
				</p>
        </div>
				<Footer />
			</div>
		);

	}
}

export default About;
import React, { Component } from 'react';
import Stocks from './Stocks';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Dashboard extends Component {


	render() {
		return (
			<div>
				<Header />        
        <Stocks />
        <Footer />
			</div>
		);

	}
}

export default Dashboard;
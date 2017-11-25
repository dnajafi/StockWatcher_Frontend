import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Dashboard extends Component {

	render() {
		return (
			<div>
				<Header />        
        <div>
        	<p>
	        	Contact
						Look me up on LinkedIn - Blaise Najafi
				</p>
        </div>
				<Footer />
			</div>
		);

	}
}

export default Dashboard;
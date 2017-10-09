import React, { Component } from 'react';
import StockTable from '../components/StockTable';


class Stocks extends Component {

	render() {
		return (
			<div className="stock-table">
				<StockTable />
			</div>
		);
	}
}

export default Stocks;
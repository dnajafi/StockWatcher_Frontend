import React, { Component } from 'react';
import { connect } from 'react-redux';
import StockTable from '../components/StockTable';
import { fetchStocks } from '../reducers/stocks';


class Stocks extends Component {


	componentWillMount() {
		this.props.fetchStocks();
	}

	render() {
		return (
			<div className="stock-table">
				<StockTable stocks={this.props.stocks} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ stocks: state.stocks.stocks });
const mapDispatchToProps = {fetchStocks};

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Stocks);

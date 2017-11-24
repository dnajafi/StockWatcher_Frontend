import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { deleteStockSymbol } from '../reducers/stocks';

class StockTable extends Component {

	cellButton(cell, row, enumObject, rowIndex) {

		return (
       <button 
       		style={{backgroundColor: 'red'}}
          type="button" 
          onClick={() => 
          alert("Cannot delete from app. Please contact admin.")}
       >
       Delete {row.symbol}
       </button>
    )

    // return (
    //    <button 
    //    		style={{backgroundColor: 'red'}}
    //       type="button" 
    //       onClick={() => 
    //       this.props.deleteStockSymbol(row.symbol)}
    //    >
    //    Delete {row.symbol}
    //    </button>
    // )
	}

	mainPageLink(cell, row, enumObject, rowIndex) {
		return (
			<a target="_blank" href={row.main_page}>Yahoo Finance Page</a>
		);
	}

	render() {
		return (
			<BootstrapTable data={this.props.stocks} striped hover>
			  <TableHeaderColumn isKey dataField='symbol'>Symbol</TableHeaderColumn>
			  <TableHeaderColumn dataField='close'>Close</TableHeaderColumn>
			  <TableHeaderColumn dataField='low'>Low</TableHeaderColumn>
			  <TableHeaderColumn dataField='high'>High</TableHeaderColumn>
			  <TableHeaderColumn dataField='main_page' dataFormat={this.mainPageLink.bind(this)}>Yahoo Finance Page</TableHeaderColumn>
			  <TableHeaderColumn dataField='delete_button' dataFormat={this.cellButton.bind(this)}>Delete</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = { deleteStockSymbol };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StockTable);









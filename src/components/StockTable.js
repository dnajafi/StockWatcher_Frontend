import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const StockTable = (props) => {

	return (
	     <BootstrapTable data={props.stocks} striped hover>
                  <TableHeaderColumn isKey dataField='symbol'>Symbol</TableHeaderColumn>
                  <TableHeaderColumn dataField='close'>Close</TableHeaderColumn>
                  <TableHeaderColumn dataField='low'>Low</TableHeaderColumn>
                  <TableHeaderColumn dataField='high'>High</TableHeaderColumn>
                  <TableHeaderColumn dataField='main_page'>Yahoo Finance Page</TableHeaderColumn>
            </BootstrapTable>
	);
}

export default StockTable;










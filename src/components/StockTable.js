import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


var products = [
	{
		ticker: "AAPL",
    name: "Apple Inc.",
    price: 155.3,
    exchangeName: "NasdaqGS",
    marketCap: "0.8t",
    peRatio: 17.6317,
    dayLow: 154.56,
    dayHigh: 155.49,
    fiftyTwoWeekLow: 104.08,
    fiftyTwoWeekHigh: 164.94,
    fiftyDayAverage: 158.072,
	},
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 155.3,
    exchangeName: "NasdaqGS",
    marketCap: "0.8t",
    peRatio: 17.6317,
    dayLow: 154.56,
    dayHigh: 155.49,
    fiftyTwoWeekLow: 104.08,
    fiftyTwoWeekHigh: 164.94,
    fiftyDayAverage: 158.072,
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 155.3,
    exchangeName: "NasdaqGS",
    marketCap: "0.8t",
    peRatio: 17.6317,
    dayLow: 154.56,
    dayHigh: 155.49,
    fiftyTwoWeekLow: 104.08,
    fiftyTwoWeekHigh: 164.94,
    fiftyDayAverage: 158.072,
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 155.3,
    exchangeName: "NasdaqGS",
    marketCap: "0.8t",
    peRatio: 17.6317,
    dayLow: 154.56,
    dayHigh: 155.49,
    fiftyTwoWeekLow: 104.08,
    fiftyTwoWeekHigh: 164.94,
    fiftyDayAverage: 158.072,
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 155.3,
    exchangeName: "NasdaqGS",
    marketCap: "0.8t",
    peRatio: 17.6317,
    dayLow: 154.56,
    dayHigh: 155.49,
    fiftyTwoWeekLow: 104.08,
    fiftyTwoWeekHigh: 164.94,
    fiftyDayAverage: 158.072,
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 155.3,
    exchangeName: "NasdaqGS",
    marketCap: "0.8t",
    peRatio: 17.6317,
    dayLow: 154.56,
    dayHigh: 155.49,
    fiftyTwoWeekLow: 104.08,
    fiftyTwoWeekHigh: 164.94,
    fiftyDayAverage: 158.072,
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 155.3,
    exchangeName: "NasdaqGS",
    marketCap: "0.8t",
    peRatio: 17.6317,
    dayLow: 154.56,
    dayHigh: 155.49,
    fiftyTwoWeekLow: 104.08,
    fiftyTwoWeekHigh: 164.94,
    fiftyDayAverage: 158.072,
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 155.3,
    exchangeName: "NasdaqGS",
    marketCap: "0.8t",
    peRatio: 17.6317,
    dayLow: 154.56,
    dayHigh: 155.49,
    fiftyTwoWeekLow: 104.08,
    fiftyTwoWeekHigh: 164.94,
    fiftyDayAverage: 158.072,
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 155.3,
    exchangeName: "NasdaqGS",
    marketCap: "0.8t",
    peRatio: 17.6317,
    dayLow: 154.56,
    dayHigh: 155.49,
    fiftyTwoWeekLow: 104.08,
    fiftyTwoWeekHigh: 164.94,
    fiftyDayAverage: 158.072,
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 155.3,
    exchangeName: "NasdaqGS",
    marketCap: "0.8t",
    peRatio: 17.6317,
    dayLow: 154.56,
    dayHigh: 155.49,
    fiftyTwoWeekLow: 104.08,
    fiftyTwoWeekHigh: 164.94,
    fiftyDayAverage: 158.072,
  }];

const StockTable = (props) => {
	return (
		<BootstrapTable data={props.stocks} striped hover>
      <TableHeaderColumn isKey dataField='ticker'>Symbol</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
      <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
      <TableHeaderColumn dataField='exchangeName'>Exchange</TableHeaderColumn>
      <TableHeaderColumn dataField='marketCap'>Mkt cap</TableHeaderColumn>
      <TableHeaderColumn dataField='peRatio'>PE ratio</TableHeaderColumn>
      <TableHeaderColumn dataField='dayLow'>Low</TableHeaderColumn>
      <TableHeaderColumn dataField='dayHigh'>High</TableHeaderColumn>
      <TableHeaderColumn dataField='fiftyTwoWeekLow'>52 week low</TableHeaderColumn>
      <TableHeaderColumn dataField='fiftyTwoWeekHigh'>52 week high</TableHeaderColumn>
      <TableHeaderColumn dataField='fiftyDayAverage'>50 day avg.</TableHeaderColumn>
  </BootstrapTable>
	);
}

export default StockTable;










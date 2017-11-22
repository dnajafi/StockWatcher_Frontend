import { getStocks, addStock } from '../lib/stocksService';

const initState = {
	stocks: [],
	updateMessage: '',
	newSymbol: ''
};

export const STOCKS_LOAD = 'STOCKS_LOAD';
export const UPDATING_STOCKS = 'UPDATING_STOCKS';
export const CURRENT_NEW_SYMBOL_UPDATE = 'CURRENT_NEW_SYMBOL_UPDATE';
export const SAVE_CURRENT_SYMBOL = 'SAVE_CURRENT_SYMBOL';

export const loadStocks = (stocks) => ({ type: STOCKS_LOAD, payload: stocks });
export const updatingStocks = (msg) => ({ type: UPDATING_STOCKS, payload: msg });
export const updateCurrentNewSymbol = (val) => ({type: CURRENT_NEW_SYMBOL_UPDATE, payload: val});
export const saveCurrentSymbol = (response) => ({ type: SAVE_CURRENT_SYMBOL, payload: response });

export const fetchStocks = () => {
	return (dispatch) => {
		getStocks()
			.then(stocks => dispatch(loadStocks(stocks)))
	}
}

export const saveCurrentNewSymbol = (symbol) => {
	return (dispatch) => {
		addStock(symbol)
			.then(response => dispatch(saveCurrentSymbol(response)))
			.then(() => {
				getStocks()
					.then(res => {
						dispatch(loadStocks(res.stocks))
					})
			})
		  .catch(function (error) {
		    console.log(error);
		  });		
	}
}

// Updates stocks on backend server and then fetch
export const updateStocksAndFetch = () => {
	return (dispatch) => {
		dispatch(updatingStocks('Currently Updating Stocks and Fetching Stocks'));
		getStocks()
			.then(res => {
				dispatch(loadStocks(res.stocks))
			})
	}
}

export default (state=initState, action) => {
	switch(action.type) {
		case STOCKS_LOAD:
			return { ...state, stocks: action.payload, updateMessage: 'Done loading stocks' }
		case UPDATING_STOCKS:
			return { ...state, updateMessage: action.payload }
		case CURRENT_NEW_SYMBOL_UPDATE:
			return { ...state, newSymbol: action.payload }
		case SAVE_CURRENT_SYMBOL:
			return { ...state, newSymbol: '', updateMessage: "Successfully added stock " + action.payload.data.symbol }
		default:
			return state;
	}
}
import { getStocks, updateStocks } from '../lib/stocksService';


const initState = {
	stocks: [],
	updateMessage: ''
};

export const STOCKS_LOAD = 'STOCKS_LOAD';
export const UPDATING_STOCKS = 'UPDATING_STOCKS';

export const loadStocks = (stocks) => ({ type: STOCKS_LOAD, payload: stocks });
export const updatingStocks = (msg) => ({ type: UPDATING_STOCKS, payload: msg });


export const fetchStocks = () => {
	return (dispatch) => {
		getStocks()
			.then(stocks => dispatch(loadStocks(stocks)))
	}
}

// Updates stocks on backend server
// export const updateStocksBeforeFetch = () => {

// 	return (dispatch) => {
// 		dispatch(updatingStocks('Currently Updating Stocks'));

// 		updateStocks()
// 			.then(res => dispatch(updatingStocks(res.msg)))
// 	}
// }


// Updates stocks on backend server and then fetch
export const updateStocksAndFetch = () => {
	return (dispatch) => {
		dispatch(updatingStocks('Currently Updating Stocks'));

		updateStocks()
			.then(res => {
				dispatch(updatingStocks(res.msg))

				getStocks()
					.then(stocks => dispatch(loadStocks(stocks)))
			})
	}
}

export default (state=initState, action) => {
	switch(action.type) {
		case STOCKS_LOAD:
			return { ...state, stocks: action.payload }
		case UPDATING_STOCKS:
			return { ...state, updateMessage: action.payload }

		default:
			return state;
	}
}
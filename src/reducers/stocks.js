import { getStocks } from '../lib/stocksService';


const initState = {
	stocks: []
};

export const STOCKS_LOAD = 'STOCKS_LOAD';

export const loadStocks = (stocks) => ({ type: STOCKS_LOAD, payload: stocks });


export const fetchStocks = () => {
	return (dispatch) => {
		getStocks()
			.then(stocks => dispatch(loadStocks(stocks)))
	}
}

export default (state=initState, action) => {
	switch(action.type) {
		case STOCKS_LOAD:
			return { ...state, stocks: action.payload }

		default:
			return state;
	}
}
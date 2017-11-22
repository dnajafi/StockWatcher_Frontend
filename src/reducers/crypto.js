import { getBTCPrice, getEtherPrice } from '../lib/cryptoService'

const initState = {
	bitcoin_price: 0,
	ether_price: 0
};

export const LOAD_BTC_PRICE = 'LOAD_BTC_PRICE';
export const LOAD_ETHER_PRICE = 'LOAD_ETHER_PRICE';

export const loadBTCPrice = (btcPrice) => ({ type: LOAD_BTC_PRICE, payload: btcPrice });
export const loadEtherPrice = (etherPrice) => ({ type: LOAD_ETHER_PRICE, payload: etherPrice });

export const fetchBTCPrice = () => {
	return (dispatch) => {
		getBTCPrice()
			.then(function (response) {
	    	dispatch(loadBTCPrice(response.data.bpi.USD.rate_float))
	  	})
	  	.catch(function (error) {
	    	console.log(error);
	  	});
	}
}

export const fetchEtherPrice = () => {
	return (dispatch) => {
		getEtherPrice()
			.then(function (response) {
				// console.log(response.data[0].price_usd);
	    	dispatch(loadEtherPrice(response.data[0].price_usd))
	  	})
	  	.catch(function (error) {
	    	console.log(error);
	  	});
	}
}


export default (state=initState, action) => {
	switch(action.type) {
		case LOAD_BTC_PRICE:
			return { ...state, bitcoin_price: action.payload }
		case LOAD_ETHER_PRICE:
			return { ...state, ether_price: action.payload }
		default:
			return state;
	}
}
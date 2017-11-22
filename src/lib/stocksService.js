import axios from 'axios';

// const baseUrl = ' http://127.0.0.1:5000';
const baseUrl = "https://stock-watcher-dbn.herokuapp.com";

export const getStocks = () => {
	return fetch(baseUrl + '/stocks', {
		method: 'GET'
	}) 
		.then(res => {
			return res.json();
		})
}

export const updateStocks = (name) => {
	return fetch(baseUrl+'/updatestocks', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(res => res.json())
}

export const addStock = (newStockSymbol) => {
	return axios.post(baseUrl + '/stock', {
		symbol: newStockSymbol
  })
}
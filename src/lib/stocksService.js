const baseUrl = 'http://localhost:8080/stocks';

export const getStocks = () => {
	return fetch(baseUrl, {mode: 'cors'})
		.then(res => res.json())
}
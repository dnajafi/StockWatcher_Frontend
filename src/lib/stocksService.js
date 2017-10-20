const baseUrl = 'http://localhost:8080/stocks';

export const getStocks = () => {
	return fetch(baseUrl, {mode: 'cors'})
		.then(res => res.json())
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


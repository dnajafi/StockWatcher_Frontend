import axios from 'axios';

const baseUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

export const getBTCPrice = () => {
	return axios.get(baseUrl);
}

/*


*/
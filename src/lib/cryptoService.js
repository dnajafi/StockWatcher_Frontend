import axios from 'axios';

const baseBTCUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
const baseEtherUrl = "https://api.coinmarketcap.com/v1/ticker/ethereum/";

export const getBTCPrice = () => {
	return axios.get(baseBTCUrl);
}


export const getEtherPrice = () => {
	return axios.get(baseEtherUrl);
}
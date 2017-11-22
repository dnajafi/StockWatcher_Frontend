import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import stocksReducer from './reducers/stocks';
import cryptoReducer from './reducers/crypto';


const reducer = combineReducers({
	stocks: stocksReducer,
	crypto: cryptoReducer
});

export default createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
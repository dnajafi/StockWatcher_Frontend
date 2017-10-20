import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import stocksReducer from './reducers/stocks';


const reducer = combineReducers({
	stocks: stocksReducer
});

export default createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
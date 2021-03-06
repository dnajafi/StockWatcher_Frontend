import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import store from './store';

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
document.getElementById('root'));

registerServiceWorker();

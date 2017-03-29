import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './components/reducer';
import App from './components/app';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
	reducer, 
	applyMiddleware(thunk)
);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
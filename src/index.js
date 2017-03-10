import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './components/reducer';
import App from './components/app';
import { Provider } from 'react-redux';

const store = createStore(reducer);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
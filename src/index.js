import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './components/Router.jsx';

import './css/style.styl';

// The non-hot-loader way
// ReactDOM.render(<App />, document.getElementById('main'));

// The hot loader way
const render = Component => ReactDOM.render( // eslint-disable-line react/no-render-return-value
	<AppContainer>
		<Component />
	</AppContainer>,
	document.getElementById('main'));

render(Router);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/Router.jsx', () => render(Router));
}

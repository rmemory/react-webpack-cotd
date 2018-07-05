import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import StorePicker from './components/StorePicker.jsx';

import './css/style.styl';

// The non-hot-loader way
// ReactDOM.render(<App />, document.getElementById('main'));

// The hot loader way
const render = Component => ReactDOM.render( // eslint-disable-line react/no-render-return-value
	<AppContainer>
		<Component />
	</AppContainer>,
	document.getElementById('main'));

render(StorePicker);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/StorePicker.jsx', () => render(StorePicker));
}

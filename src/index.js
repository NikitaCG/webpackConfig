import ReactDOM from 'react-dom';
import React from 'react';
import App from './Containers/App/index';


ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
	module.hot.accept('./Containers/App/index', () => {
		ReactDOM.render(<App />, document.getElementById('app'));
	});
}

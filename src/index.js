import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import AppStore from './store/index';
import Routing from './routes';

import App from './Containers/App/index';

const history = createHistory();

const middleware = routerMiddleware(history);
// const AppHistory = syncHistoryWithStore(BrowserRouter, AppStore);

const store = AppStore(middleware);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				 <Routing />
				{/* <Route exac path='/' component={App} /> */}
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app'),
);

if (module.hot) {
	module.hot.accept('./routes', () => {
		ReactDOM.render(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div>
						 <Routing />
					</div>
				</ConnectedRouter>
			</Provider>, document.getElementById('app'),
		);
	});
}

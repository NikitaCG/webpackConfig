import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import AppStore from './store/index';
import Routing from './routes';


const history = createHistory();

const middleware = routerMiddleware(history);

const store = AppStore(middleware);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				 <Routing />
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

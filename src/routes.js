// список роутов

import React from 'react';
import { Route } from 'react-router-dom';

import App from './Containers/App/index';
import NewPage from './Containers/NewPage/index';

class Router extends React.Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={App}/>
				<Route path="/new" component={NewPage}/>
			</div>
		);
	}
}

export default Router;

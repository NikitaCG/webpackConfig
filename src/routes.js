// список роутов

import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import App from './Containers/App/index';
import NewPage from './Containers/NewPage/index';
// import Grid from './Containers/GridExample/index';

const Grid = React.lazy(() => import('./Containers/GridExample/index'));

class Router extends React.Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={App}/>
				<Route path="/new" component={NewPage}/>
				<Route
					path="/grid"
					render={() => (
						<Suspense
							fallback={<div>Loading...</div>}
						>
							<Grid />
						</Suspense>
					)}
				/>
			</div>
		);
	}
}

export default Router;

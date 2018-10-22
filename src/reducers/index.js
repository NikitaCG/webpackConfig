import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import filmsReducer from './filmsReducer';

const AppReducers = combineReducers({
	filmsReducer,
	routerReducer,
});

export default AppReducers;

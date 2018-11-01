import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import filmsReducer from './filmsReducer';
import socketDataReducer from './socketDataReducer';

const AppReducers = combineReducers({
	filmsReducer,
	routerReducer,
	socketDataReducer,
});

export default AppReducers;

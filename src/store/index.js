import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// загржаем редьюсеры
import { composeWithDevTools } from 'redux-devtools-extension';
import AppReducer from '../reducers';

const AppStore = (middl) => {
	// создаем хранище
	const store = createStore(
		AppReducer,
		composeWithDevTools(applyMiddleware(thunk, middl, createLogger())),
	);

	// если сборщик поддерживает hot-reload то пробуем подгрузить нужные redusers
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
};

export default AppStore;

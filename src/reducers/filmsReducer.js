import * as filmsConstant from '../constant/filmsConstant';


export default function films(state = {}, action) {
	switch (action.type) {
	case filmsConstant.LOAD_COMEDY:
		return action.data;

	case filmsConstant.LOAD_CRIMINAL:
		return action.data;


	default: return state;
	}
}

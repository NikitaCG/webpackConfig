import * as socketConstant from '../constant/socketConstant';

export default function socket(state = {}, action) {
	switch (action.type) {
	case socketConstant.LOAD_TIME:
		return action.data;

	default: return state;
	}
}

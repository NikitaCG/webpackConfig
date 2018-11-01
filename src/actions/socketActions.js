import * as socketConstant from '../constant/socketConstant';

export function socketTime(dispatch, data) {
	return dispatch({
		type: socketConstant.LOAD_TIME,
		data,
	});
}

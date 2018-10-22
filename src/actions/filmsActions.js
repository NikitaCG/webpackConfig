
import * as filmsConstant from '../constant/filmsConstant';

export function loadComedy(dispatch) {
	fetch('http://www.mocky.io/v2/5bcda2c82f00007600c854a0')
		.then(response => response.json())
		.then(data => dispatch(
			{
				type: filmsConstant.LOAD_COMEDY,
				data,
			},
		))
		.catch(alert);
}

export function loadCriminal(dispatch) {
	fetch('http://www.mocky.io/v2/5bcda9ba2f00007c00c854d5')
		.then(response => response.json())
		.then(data => dispatch(
			{
				type: filmsConstant.LOAD_CRIMINAL,
				data,
			},
		))
		.catch(alert);
}


// export function loadComedy() {
// 	fetch('http://www.mocky.io/v2/5bcda2c82f00007600c854a0')
// 		.then(response => response.json())
// 		.then(data => ({
// 			type: filmsConstant.LOAD_COMEDY,
// 			data,
// 		}))
// 		.catch(alert);
// }
//
// export function loadCriminal() {
// 	fetch('http://www.mocky.io/v2/5bcda9ba2f00007c00c854d5')
// 		.then(response => response.json())
// 		.then(data => (
// 			{
// 				type: filmsConstant.LOAD_CRIMINAL,
// 				data,
// 			}))
// 		.catch(alert);
// }

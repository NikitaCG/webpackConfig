// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import gridScss from '../../styles/grid.scss';

class Grid extends React.Component {
	render() {
		return (
			<div className={gridScss.grid__container}>
				<div className={gridScss.grid__header}>
					<Link to='/'>
						<div className={gridScss.grid__headerLink}>
                            backkkkk
						</div>
					</Link>

				</div>
				<div className={gridScss.grid__main}>
					<div className={gridScss.grid__mainBody}>
						ololo
					</div>
				</div>
				<div className={gridScss.grid__footer}>
                    footer
				</div>
			</div>
		);
	}
}

export default Grid;

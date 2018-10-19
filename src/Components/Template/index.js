// @flow
import * as React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// стили
import styles from '../../styles/main.scss';
import exampleStyles from '../../styles/expample.scss';

const mainStyles = classNames.bind(styles);
const examp = classNames.bind(exampleStyles);

const style = mainStyles(
	'title',
	'title_bigFont',
);

const exam = examp(
	'title_positionCenter',
);

type Props = {
	open: boolean,
	onChangeOpen: Function
};

class Template extends React.Component<Props> {
	render() {
		return (
			<div>
				<button
					onClick={this.props.onChangeOpen}
				>
					{!this.props.open ? 'open' : 'close'}
				</button>
				{
					this.props.open
						? <div className={`${style} ${exam}` }>
                            hello world!!!!!
						</div>
						: <div />
				}
				<Link to='/new' >
                    go
				</Link>

			</div>
		);
	}
}

export default Template;

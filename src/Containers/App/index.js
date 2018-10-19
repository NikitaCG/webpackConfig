import React from 'react';
import classNames from 'classnames/bind';
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

class App extends React.Component {
	render() {
		return (
			<div className={`${style} ${exam}` }>
                hello world!!!!!
			</div>
		);
	}
}

export default App;

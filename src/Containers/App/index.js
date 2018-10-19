// @flow
import React from 'react';

import Template from '../../Components/Template/index';

type State = {
	open: boolean,
}


class App extends React.Component<null, State> {
	constructor(props) {
    	super(props);

		this.state = {
			open: false,
		};
	}


	onChangeOpen = () => {
		this.setState({
			open: !this.state.open,
		});
	};

	render() {
		return (
			<Template
				open={this.state.open}
				onChangeOpen={this.onChangeOpen}
			/>
		);
	}
}

export default App;

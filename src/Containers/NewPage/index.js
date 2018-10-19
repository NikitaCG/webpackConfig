// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

type State = {
    name: string,
}

class NewPage extends React.Component<null, State> {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		};
	}

    onChangeName = (e) => {
    	this.setState({
    		name: e.target.value,
    	});
    };

    render() {
    	return (
    		<div>
    			<input
    				type='text'
    				value={this.state.name}
    				onChange={this.onChangeName}
    			/>
    			<Link to='/' >
                    back
    			</Link>
    		</div>
    	);
    }
}

export default NewPage;

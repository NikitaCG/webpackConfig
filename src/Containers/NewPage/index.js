// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import io from 'socket.io-client';
import { bindActionCreators } from 'redux';
import * as filmsActions from '../../actions/filmsActions';
import * as socketActions from '../../actions/socketActions';

const socketUrl = 'http://localhost:9006';

type Props ={
	socket: Object,
	films: Object,
        loadComedy: Function,
        loadCriminal: Function,
        loadTime: Function,
}

type State = {
    name: string,
	films: Array,
	time:string,
}

class NewPage extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			films: [],
			socket: null,
			time: '',
		};
	}


	initSocket = () => {
		const socket = io.connect(socketUrl);
		socket.on('time', (data) => {
			this.props.loadTime(data);
		});
		this.setState({ socket });
	};

	disconnectSocket = () => {
		let socket = this.state.socket;

		socket.disconnect();
	}

	// setUser = (user) => {
	// 	let { socket } = this.state.socket;
	//
	// 	socket.emit()
	// }


	componentDidMount() {
		// this.initSocket();

		const dataFilms = sessionStorage.films ? JSON.parse(sessionStorage.films) : '';
		if (sessionStorage.films) {
			this.setState({
				films: dataFilms.films,
			});
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.socket !== prevState.time) {
			return {
				time: nextProps.socket.toString(),
			};
		}

		if (nextProps.films && nextProps.films.data) {
			sessionStorage.films = JSON.stringify(nextProps.films.data);

			if (prevState.name) {
				return {
					films: nextProps.films.data.films.filter(item => item.includes(prevState.name)),
				};
			}

			return {
				films: nextProps.films.data.films,
			};
		}

		return null;
	}

    onChangeName = (e) => {
    	this.setState({
    		name: e.target.value,
    	});
    };


    render() {
    	console.log('state', this.state.time);
    	// console.log('actions', filmsActions);
    	console.log('props', this.props);
    	return (
    		<div className='col-md-8'>
    			{ this.state.time}
    			<p>
    				<button onClick={this.initSocket}>
						init socket
    				</button>
    			</p><p>
    				<button onClick={this.disconnectSocket}>
						disconnect socket
    				</button>
    			</p>
    			<input
    				type='text'
    				value={this.state.name}
    				onChange={this.onChangeName}
    			/>
    			<button
    				onClick={this.props.loadComedy}
    			>
					load comedy
    			</button>
    			<button
    				onClick={this.props.loadCriminal}
    			>
                    load criminal
    			</button>
    			<Link to='/' >
                    back
    			</Link>
    			{
    				this.state.films
						&& <div>
							{this.state.films.map((item, index) => <div key={index}>
								{item}
							</div>)}
						</div>
    			}

    		</div>
    	);
    }
}

const mapStateToProps = state => ({
	films: state.filmsReducer,
	socket: state.socketDataReducer,
});

const mapDispatchProps = dispatch => ({
	// actions: bindActionCreators(filmsActions, dispatch),
	loadTime: data => socketActions.socketTime(dispatch, data),
	loadComedy: () => filmsActions.loadComedy(dispatch),
	loadCriminal: () => filmsActions.loadCriminal(dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchProps,
)(NewPage);

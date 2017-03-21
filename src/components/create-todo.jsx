import React from 'react';
import { connect } from 'react-redux';
import { 
	addTodo
} from './actions';
import { FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

class CreateTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<FormGroup
					controlId="taskText"
				>
					<FormControl
						type="text"
						value={this.state.value}
						placeholder="Enter task"
						onChange={this.handleChange.bind(this)}
					/>
				</FormGroup>
			</form>
		);
	}

	handleCreate(event) {
		event.preventDefault();
		this.props.addTodo(this.state.value);
		this.setState({value: ''})
	}
}

const mapStateToProps = (state) => {
	return { 
		todos: state
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: task => dispatch(addTodo(task))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);


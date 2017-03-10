import React from 'react';
import { connect } from 'react-redux';
import { 
	addTodo
} from './actions';

class CreateTodo extends React.Component {
	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="What do I need to do?"
					ref="createInput"/>
				<button>Create</button>
			</form>
		);
	}

	handleCreate(event) {
		event.preventDefault();
		if (this.refs.createInput.value !== ''){
			this.props.addTodo(this.refs.createInput.value);
		}
		this.refs.createInput.value = '';
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


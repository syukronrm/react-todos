import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { 
	addTodo, 
	toggleTodo, 
	editTodo, 
	deleteTodo 
} from './actions';

class TodosListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false
		};
	}

	renderActionsSection() {
		if (this.state.isEditing) {
			return (
				<td>
					<button onClick={this.onSaveClick.bind(this)}>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		}

		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button onClick={this.onDeleteClick.bind(this)}>Delete</button>
			</td>
		);
	}

	onSaveClick(event) {
		event.preventDefault();
		const oldTask = this.props.task;
		const newTask = this.refs.editTask.value;
		this.props.editTodo(oldTask, newTask);
		this.setState({ isEditing : false });
	}

	onCancelClick() {
		this.setState({
			isEditing: false
		});
	}

	onEditClick() {
		this.setState({
			isEditing: !this.state.isEditing
		});
	}

	onDeleteClick() {
		const task = this.props.task;
		this.props.deleteTodo(task);
	}

	renderTaskSection() {
		const { task, isCompleted } = this.props;
		const taskStyle = {
			color: isCompleted? 'green' : 'black',
			cursor: 'pointer'
		}

		if (this.state.isEditing) {
			return (
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input type="text" defaultValue={task} ref="editTask"/>
					</form>
				</td>
			);
		}

		return (
				<td onClick={this.props.toggleTodo.bind(this, task)} style={taskStyle}>{task}</td>
		);
	}

	render() {
		return (
			<tr>
				{this.renderTaskSection()}
				{this.renderActionsSection()}
			</tr>
		);
	}
};

const mapStateToProps = (state) => {
	return { 
		todos: state
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: task => dispatch(addTodo(task)),
		toggleTodo: task => dispatch(toggleTodo(task)),
		editTodo: (oldTask, newTask) => dispatch(editTodo(oldTask, newTask)),
		deleteTodo: task => dispatch(deleteTodo(task))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosListItem);









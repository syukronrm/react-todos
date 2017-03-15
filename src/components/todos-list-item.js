import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { 
	addTodo, 
	toggleTodo, 
	editTodo, 
	deleteTodo 
} from './actions';
import { Button, ButtonToolbar, FormGroup, FormControl } from 'react-bootstrap';

class TodosListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			task: this.props.task
		};
	}

	renderActionsSection() {
		if (this.state.isEditing) {
			return (
				<td>
					<ButtonToolbar>
						<Button bsStyle="warning" onClick={this.onSaveClick.bind(this)}>Save</Button>
						<Button bsStyle="danger" onClick={this.onCancelClick.bind(this)}>Cancel</Button>
					</ButtonToolbar>
				</td>
			);
		}

		return (
			<td>
					<ButtonToolbar>
						<Button bsStyle="warning" onClick={this.onEditClick.bind(this)}>Edit</Button>
						<Button bsStyle="danger" onClick={this.onDeleteClick.bind(this)}>Delete</Button>
					</ButtonToolbar>
			</td>
		);
	}

	onSaveClick(event) {
		event.preventDefault();
		const oldTask = this.props.task;
		const newTask = this.state.task;
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
		this.props.deleteTodo(this.props.task);
	}

	handleChange(event) {
		this.setState({ task: event.target.value });
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
							<FormControl
								type="text"
								value={this.state.task}
								onChange={this.handleChange.bind(this)}
							/>
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









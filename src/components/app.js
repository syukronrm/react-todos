import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import _ from 'lodash';

const todos = [{
    task: 'make react tous',
    isCompleted: false
}, {
    task: 'eat dinner',
    isCompleted: true
}];

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: todos
		};
	}

	render() {
		return (
			<div>
				<h1> React Todos App </h1>
				<CreateTodo createTask={this.createTask.bind(this)}/>
				<TodosList 	todos={this.state.todos}
							toggleTask={this.toggleTask.bind(this)}
							saveTask={this.saveTask.bind(this)}
							deleteTask={this.deleteTask.bind(this)}
							/>
			</div>
		);
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todos, todos => todos.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos });
	}

	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});

		this.setState({
			todos : this.state.todos
		})
	}

	saveTask(oldTask, newTask) {
		const foundTask = _.find(this.state.todos, todos => todos.task === oldTask);
		foundTask.task = newTask;
		this.setState({props: this.state.todos});
	}

	deleteTask(task) {
		_.remove(this.state.todos, todos => todos.task === task);
		this.setState({todos: this.state.todos});
	}
}

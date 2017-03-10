import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import _ from 'lodash';
import { connect } from 'react-redux';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1> React Todos App </h1>
				<CreateTodo/>
				<TodosList/>
			</div>
		);
	}
}
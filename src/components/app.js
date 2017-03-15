import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import _ from 'lodash';
import { connect } from 'react-redux';
import Navbar from './template/navbar';
import { Col } from 'react-bootstrap';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar title="React Todos App"></Navbar>
				<Col xs={6} md={12}>
					<CreateTodo/>
					<TodosList/>
				</Col>
			</div>
		);
	}
}
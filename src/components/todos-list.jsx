import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import {
	fetchTodos
} from './actions';

class TodosList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchTodos();
	}

	renderItems() {

		return _.map(this.props.todos, (todos, index) => {
			return <TodosListItem key={index} {...todos}/>;
		})
	}

	render() {
		return (
			<Table striped bordered condensed hover>
				<TodosListHeader/>
				<tbody>
					{this.renderItems()}
				</tbody>
			</Table>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTodos: () => dispatch(fetchTodos())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class TodosList extends React.Component {
	constructor(props) {
		super(props);
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

export default connect(mapStateToProps)(TodosList);
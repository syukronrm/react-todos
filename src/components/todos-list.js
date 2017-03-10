import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import { connect } from 'react-redux';

class TodosList extends React.Component {
	constructor(props) {
		super(props);
	}

	renderItems() {
		return _.map(this.props.todos, (todos, index) => 
			<TodosListItem key={index} {...todos}/>);
	}

	render() {
		return (
			<table>
				<TodosListHeader/>
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		todos: state
	};
};

export default connect(mapStateToProps)( TodosList);
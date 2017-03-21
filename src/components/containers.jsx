import { connect } from 'react-redux';
import * as components from './app';
import { 
	addTodo, 
	toggleTodo, 
	editTodo, 
	deleteTodo 
} from './actions';

export const App = connect(
	function mapStateToProps(state) {
		return { 
			todos: state
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			addTodo: task => dispatch(addTodo(task)),
			toggleTodo: id => dispatch(toggleTodo(id)),
			editTodo: (id, newTask) => dispatch(editTodo(id, newTask)),
			deleteTodo: id => dispatch(deleteTodo(id))
		}
	}
)(components.App);
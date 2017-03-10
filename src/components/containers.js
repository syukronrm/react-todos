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
			toggleTodo: task => dispatch(toggleTodo(task)),
			editTodo: (oldTask, newTask) => dispatch(editTodo(oldTask, newTask)),
			deleteTodo: task => dispatch(deleteTodo(task))
		}
	}
)(components.App);
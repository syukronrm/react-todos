import _ from 'lodash';

const init = [];

export default function(todos=init, action) {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...todos,
				action.payload
			];
		case 'TOGGLE_TODO':
			return todos.map(todo => {
				if (todo.id === action.payload) {
					todo.isCompleted = !todo.isCompleted;
				}
				return todo;
			});
		case 'DELETE_TODO':
			return todos.filter(todo => todo.id !== action.payload);
		case 'EDIT_TODO':
			return todos.map(todo => {
				if (todo.id === action.payload.id) {
					todo.task = action.payload.newTask;
				}
				return todo;
			})
		default:
			return todos;
	}
}
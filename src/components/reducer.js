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
				if (todo.task === action.payload) {
					todo.isCompleted = !todo.isCompleted;
				}
				return todo;
			});
		case 'DELETE_TODO':
			return todos.filter(todo => todo.task !== action.payload);
		case 'EDIT_TODO':
			return todos.map(todo => {
				if (todo.task === action.payload.oldTask) {
					todo.task = action.payload.newTask;
				}
				return todo;
			})
		default:
			return todos;
	}
}
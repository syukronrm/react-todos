export function addTodo(task) {
	return {
		type: 'ADD_TODO',
		payload: {
			task: task,
			isCompleted: false
		}
	};
}

export function toggleTodo(task) {
	return {
		type: 'TOGGLE_TODO',
		payload: task
	};
}

export function editTodo(oldTask, newTask) {
	return {
		type: 'EDIT_TODO',
		payload: {
			oldTask: oldTask,
			newTask: newTask
		}
	};
}

export function deleteTodo(task) {
	return {
		type: 'DELETE_TODO',
		payload: task
	};
}
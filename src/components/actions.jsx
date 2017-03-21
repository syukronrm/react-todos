let ids = 0;

export function addTodo(task) {
	ids += 1;
	let payload = {
		id: ids,
		task: task,
		isCompleted: false
	};
	return {
		type: 'ADD_TODO',
		payload: payload
	};
}

export function toggleTodo(id) {
	return {
		type: 'TOGGLE_TODO',
		payload: id
	};
}

export function editTodo(id, newTask) {
	return {
		type: 'EDIT_TODO',
		payload: {
			id: id,
			newTask: newTask
		}
	};
}

export function deleteTodo(id) {
	return {
		type: 'DELETE_TODO',
		payload: id
	};
}
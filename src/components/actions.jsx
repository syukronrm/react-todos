import fetch from 'isomorphic-fetch';

export function addTodo(id, task) {
	let payload = {
		id: id,
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

export function deleteTodo_(id) {
	return {
		type: 'DELETE_TODO',
		payload: id
	};
}

export function fetchTodosSuccess(tasks) {
	return { 
		type: 'FETCH_TODOS_SUCCESS',
		payload: tasks
	};
}

export function fetchTodos() {
	return (dispatch) => {
		return fetch('http://localhost:8000/task')
			.then(response => response.json())
			.then(json => {
				return dispatch(fetchTodosSuccess(json));
			})
			.catch(error => {
				throw(error);
			});
	};
}

export function insertTodo(task) {
	return (dispatch) => {
		return fetch('http://localhost:8000/task/', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'task' : task
				})
			})
			.then(response => response.json())
			.then(json => {
				return dispatch(addTodo(json.id, json.task));
			})
			.catch(error => {
				throw(error);
			});
	}
}

export function updateTodo(id, task) {
	return (dispatch) => {
		return fetch('http://localhost:8000/task/' + id, {
				method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'task': task
				})
			})
			.then(response => response.json())
			.then(json => {
				return dispatch(editTodo(id, task));
			})
			.catch(error => {
				throw(error);
			})
	}
}

export function updateToggleTodo(id) {
	return (dispatch) => {
		return fetch('http://localhost:8000/task/' + id, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			})
			.then(response => response.json())
			.then(json => {
				return fetch('http://localhost:8000/task/' + id, {
						method: 'PUT',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify ({
							'isCompleted': !json.isCompleted,
							'task': json.task
						})
					})
					.then(response => response.json())
					.then(json => {
						return dispatch(toggleTodo(id));
				});
			});
	}
}

export function deleteTodo(id) {
	return (dispatch) => {
		return fetch('http://localhost:8000/task/' + id, {
				method: 'DELETE',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			})
			.then(response => response.json())
			.then(json => {
				return dispatch(deleteTodo_(id));
			});
	}
}
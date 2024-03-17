export const deleteTodo = (id) => {
	return (dispatch) => {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: "DELETE",
		})
			.then((res) => {
				return res.json();
			})
			.then((todo) => {
				dispatch({
					type: "DELETE_TODOS",
					payload: todo.id,
				});
			});
	};
};

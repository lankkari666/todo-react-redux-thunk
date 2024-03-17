export const editTodo = (value, id) => {
	return (dispatch) => {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: "PATCH",
			body: JSON.stringify({
				title: value,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((todo) => {
				dispatch({
					type: "EDIT_TODOS",
					payload: todo,
				});
			});
	};
};

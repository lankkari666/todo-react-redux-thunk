export const createTodo = (value) => {
	return (dispatch) => {
		fetch(`http://localhost:3000/todos`, {
			method: "POST",
			body: JSON.stringify({
				title: value,
				completed: false,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((todo) => {
				dispatch({
					type: "CREATE_TODOS",
					payload: todo,
				});
			});
	};
};

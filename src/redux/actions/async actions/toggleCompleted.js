export const toggleCompleted = (task) => {
	return (dispatch) => {
		fetch(`http://localhost:3000/todos/${task.id}`, {
			method: "PATCH",
			body: JSON.stringify({
				completed: !task.completed,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((todo) => {
				dispatch({
					type: "TOGGLE_COMPLETED",
					payload: todo,
				});
			});
	};
};

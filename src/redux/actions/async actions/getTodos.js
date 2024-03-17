export const getTodos = (isSorted, value = "") => {
	return (dispatch) => {
		fetch("http://localhost:3000/todos").then((response) =>
			response.json().then((tasks) => {
				const result = tasks.filter((todo) => {
					return todo.title
						.toLowerCase()
						.includes(value.toLowerCase().trim());
				});
				if (isSorted) {
					result.sort((a, b) => {
						return a.title
							.toLowerCase()
							.localeCompare(b.title.toLowerCase());
					});
				}

				dispatch({
					type: "GET_TODOS",
					payload: result,
				});
			})
		);
	};
};

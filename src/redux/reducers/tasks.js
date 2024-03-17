const initialState = [];

export const tasks = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "TOGGLE_COMPLETED":
			return state.map((todo) => {
				return todo.id === payload.id ? payload : todo;
			});

		case "GET_TODOS":
			return payload;

		case "DELETE_TODOS":
			return state.filter(({ id }) => id !== payload);
		case "EDIT_TODOS":
			return state.map((todo) => {
				return todo.id === payload.id ? payload : todo;
			});
		case "CREATE_TODOS":
			return [payload, ...state];
		
		default:
			return state;
	}
};

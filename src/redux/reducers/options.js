const initialState = {
	searchInput: "",
	searchFlag: "",
	createValue: "",
	isSorted: false,
};

export const options = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_SEARCH_FLAG":
			return { ...state, searchFlag: payload };
		case "SET_SEARCH_INPUT":
			return { ...state, searchInput: payload };
		case "SET_CREATE_VALUE":
			return { ...state, createValue: payload };
		case "SET_SORTING":
			return { ...state, isSorted: payload };
		default:
			return state;
	}
};

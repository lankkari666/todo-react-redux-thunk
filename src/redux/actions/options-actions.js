export const setSearchFlag = (value) => {
	return {
		type: "SET_SEARCH_FLAG",
		payload: value,
	};
};
export const setSearchValue = (value) => {
	return {
		type: "SET_SEARCH_INPUT",
		payload: value,
	};
};
export const setCreateValue = (value) => {
	return {
		type: "SET_CREATE_VALUE",
		payload: value,
	};
};
export const setSorting = (value) => {
	return {
		type: "SET_SORTING",
		payload: value,
	};
};

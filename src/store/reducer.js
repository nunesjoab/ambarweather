const initialState = {
	maxTemp: 0
}

const reducer = (state = initialState, action) => {
	if (action.type == 'CHECK') {
		return {
			maxTemp: state.maxTemp + 1
		}
	}
	
	return state;
};

export default reducer;
const initialState = {
	maxTemp: 0
}

const reducer = (state = initialState, action) => {
	if (action.type === 'CHECK') {
		return {
			maxTemp: state.maxTemp > action.temp ? state.maxTemp : action.temp
		}
	}
	
	return state;
};

export default reducer;
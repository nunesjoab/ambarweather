const initialState = {
	maxTemp: 0,
	maxLocal: null,
	minTemp: 1000,
	minLocal: null,
}

const reducer = (state = initialState, action) => {
	if (action.type === 'CHECK') {
		return {
			maxTemp: state.maxTemp > action.maxTemp ? state.maxTemp : action.maxTemp,
			maxLocal: state.maxTemp > action.maxTemp ? state.maxLocal : action.local,
			minTemp: state.minTemp < action.minTemp ? state.minTemp : action.minTemp,
			minLocal: state.minTemp < action.minTemp ? state.minLocal : action.local
		}
	}
	
	return state;
};

export default reducer;
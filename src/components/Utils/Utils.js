export const convertKelvinToCelcius = (temp) => {

	if ((temp > 0) && (temp < 1000)) {
		return (temp - 273.15).toFixed(0)
	} else {
		return '';
	}

}
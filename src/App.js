import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import './css/weather-icons-wind.min.css'
import './css/weather-icons.min.css'

import Screen from './containers/Screen/Screen'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Screen />
			</div>
		);
	}
}

export default App;

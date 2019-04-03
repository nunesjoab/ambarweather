import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

import './css/weather-icons-wind.min.css'
import './css/weather-icons.min.css'
import './css/buttons.css'
import './css/card.css'

import Header from './containers/Header/Header'
import Body from './containers/Body/Body'
import Footer from './containers/Footer/Footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Body />
				<Footer />
			</div>
		);
	}
}

export default App;

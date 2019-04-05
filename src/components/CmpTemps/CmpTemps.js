import React, { Component } from 'react'

export default class CmpTemps extends Component {
	constructor(props) {
		super(props)
	}

	
	convertKelvinToCelcius(temp) {
		if((temp > 0) && (temp < 1000)) {
			return (temp - 273.15).toFixed(0)
		}
	}

  	render() {
		return (
			<div>
				<p>Temperatura máxima: {this.convertKelvinToCelcius(this.props.maxTemp)}</p>
				<p>Local da máxima: {this.props.maxLocal}</p>
				<p>Temperatura mínima: {this.convertKelvinToCelcius(this.props.minTemp)}</p>
				<p>Local da mínima: {this.props.minLocal}</p>
			</div>
		)
  	}
}

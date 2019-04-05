import React, { Component } from 'react'

export default class CmpTemps extends Component {
	
	convertKelvinToCelcius(temp) {
		if((temp > 0) && (temp < 1000)) {
			return (temp - 273.15).toFixed(0)
		}
	}

  	render() {
		return (
			<div className={"card"}>
				<p>
					<span className={"max-temp"}>
						<i className={"wi wi-day-sunny"}></i>
						{this.convertKelvinToCelcius(this.props.maxTemp)}° - {this.props.maxLocal}
					</span>
				</p>

				<p>
					<span className={"min-temp"}>
						<i className={"wi wi-snowflake-cold"}></i>
						{this.convertKelvinToCelcius(this.props.minTemp)}° - {this.props.minLocal}
					</span>
				</p>
			</div>
		)
  	}
}

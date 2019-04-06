import React, { Component } from 'react'

export default class CmpTemps extends Component {

	convertKelvinToCelcius(temp) {
		if((temp > 0) && (temp < 1000)) {
			return (temp - 273.15).toFixed(0)
		}
	}

  	render() {
		return (
			<div>
				<div className={"card"}>
					<p>
						<span className={"max-temp"}>
							Max {this.convertKelvinToCelcius(this.props.maxTemp)}° - {this.props.maxLocal}
							<i className={"wi wi-day-sunny"}></i>
						</span>
					</p>

					<p>
						<span className={"min-temp"}>
							Min {this.convertKelvinToCelcius(this.props.minTemp)}° - {this.props.minLocal}
							<i className={"wi wi-snowflake-cold"}></i>
						</span>
					</p>
				</div>

				<a className={"button"} href="/">Voltar</a>
			</div>

		)
  	}
}

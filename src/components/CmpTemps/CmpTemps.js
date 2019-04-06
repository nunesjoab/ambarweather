import React, { Component } from 'react'

import { convertKelvinToCelcius } from '../Utils/Utils'

export default class CmpTemps extends Component {

  	render() {
		return (
			<div>
				<div className={"card final-card"}>
					<p>
						<span className={"max-temp"}>
							Max {convertKelvinToCelcius(this.props.maxTemp)}° - {this.props.maxLocal}
							<i className={"wi wi-thermometer"}></i>
							<i className={"wi wi-day-sunny"}></i>
						</span>
					</p>

					<p>
						<span className={"min-temp"}>
							Min {convertKelvinToCelcius(this.props.minTemp)}° - {this.props.minLocal}
							<i className={"wi wi-thermometer"}></i>
							<i className={"wi wi-snowflake-cold"}></i>
						</span>
					</p>
				</div>

				<a className={"button"} href="/">Voltar</a>
			</div>

		)
  	}
}

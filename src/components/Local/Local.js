import React, { Component } from 'react'
/* 
import axios from '../../axios'

const APPID = '887b78e46f46df567b343b367b888e91' */

export default class Local extends Component {
	constructor(props) {
		super(props)

		this.state = {
			weather: null,
			info: null
		}
	}

	convertKelvinToCelcius(temp) {
		return (temp - 273.15).toFixed(0)
	}
/* 
	componentDidMount() {
		axios.get('data/2.5/forecast?id=' + this.props.id + '&APPID=' + APPID)
		.then(response => {
			console.log(response.data)
			const weather = response.data.list.map((element, index) => {
				return {
					...element
				}
			})

			const info = response.data.city

			this.setState({
				weather,
				info
			})
		})
	}
 */

  render() {
	return (
	  	<div className={"card"}>
			<div className={"column big"}>
				<p>{this.props.name}</p>
				<p><i className={"wi wi-thermometer"}></i></p>
				<p>{this.convertKelvinToCelcius(this.props.temp)}<i className={"wi wi-celsius"}></i></p>
				<p><i className={"wi wi-direction-up"}></i>{this.convertKelvinToCelcius(this.props.maxTemp)}<i className={"wi wi-celsius"}></i></p>
				<p><i className={"wi wi-direction-down"}></i>{this.convertKelvinToCelcius(this.props.minTemp)}<i className={"wi wi-celsius"}></i></p>
			</div>
			<div className={"column small"}>
				<img src={"http://openweathermap.org/img/w/" + this.props.icon + ".png"} alt="weather icon" />
			</div>
	  	</div>
	)
  }
}

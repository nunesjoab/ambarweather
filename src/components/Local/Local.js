import React, { Component } from 'react'

import '../../css/card.css'

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

	getWeekday() {
		var date = new Date()
		var weekday = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
		return weekday[date.getDay()]
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
			<p className={"date"}>Hoje, {this.getWeekday()}</p>
			<p className={"temperature"}>
				<i className={"wi wi-thermometer"}></i>
				{this.convertKelvinToCelcius(this.props.temp)}°
				<img src={"http://openweathermap.org/img/w/" + this.props.icon + ".png"} alt="weather icon" />
			</p>
			<p className={"title"}>{this.props.name}, SP</p>
			<p>
				<span className={"max-temp"}>
					<i className={"wi wi-thermometer"}></i>
					{this.convertKelvinToCelcius(this.props.maxTemp)}°
				</span>
				<span className={"min-temp"}>
					<i className={"wi wi-thermometer"}></i>
					{this.convertKelvinToCelcius(this.props.minTemp)}°
				</span>
				<span>
					<i className={"wi wi-humidity"}></i>
					{this.props.humidity}
				</span>
			</p>
	  	</div>
	)
  }
}

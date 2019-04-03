import React, { Component } from 'react'

import axios from '../../axios'

const APPID = '887b78e46f46df567b343b367b888e91'

export default class Local extends Component {
	constructor(props) {
		super(props)

		this.state = {
			weather: null,
			info: null
		}
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
	  <div>
		<p>Info</p>
		<p>Cidade: {this.props.name}</p>
		<img src={"http://openweathermap.org/img/w/" + this.props.icon + ".png"} />
		{/* <i className={"wi wi-owm-" + this.props.iconId}></i> */}
	  </div>
	)
  }
}

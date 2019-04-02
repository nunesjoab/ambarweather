import React, { Component } from 'react'

import axios from '../../axios'

import Local from '../../components/Local/Local'

const APPID = '887b78e46f46df567b343b367b888e91'

export default class Screen extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	getCityWeatherInfo = (id) => {
		axios.get('data/2.5/forecast?id=' + id + '&APPID=' + APPID)
			.then(response => {
				console.log(response.data)
			})
	}

   render() {
	return (
	  	<div>
			<button onClick={() => this.getCityWeatherInfo(3451234)}>Rio Claro</button>
			<button onClick={() => this.getCityWeatherInfo(3449319)}>São Carlos</button>
			<button onClick={() => this.getCityWeatherInfo(3457509)}>São Paulo</button>

			<Local />
	  	</div>
	)
  }
}

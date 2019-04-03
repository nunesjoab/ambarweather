import React, { Component } from 'react'

export default class Button extends Component {

	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

  	render() {
		return (
	  		<div>
				  <button onClick={() => this.getCityWeatherInfo(3449319)}>São Carlos</button>
	  		</div>
		)
  	}
}

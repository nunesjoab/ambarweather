import React, { Component } from 'react'

import Local from '../../components/Local/Local'

export default class Screen extends Component {
	constructor(props) {
		super(props)

		this.state = {
			local: null
		}

	}

	setLocalAttributes = (id, name) => {
		const local = {
			'id' : id,
			'name' : name
		}

		this.setState({
			local
		})
	}

   render() {
	return (
	  	<div>
			  
			<button onClick={() => this.setLocalAttributes('3451234', 'Rio Claro')}>Rio Claro</button>
			<button onClick={() => this.setLocalAttributes('3449319', 'São Carlos')}>São Carlos</button>
			<button onClick={() => this.setLocalAttributes('3457509', 'São Paulo')}>São Paulo</button>

			{
			this.state.local ?
			<Local
				name={this.state.local['name']}
				id={this.state.local['id']}
			/>			
			:
			``			
			}

	  	</div>
	)
  }
}

import React, { Component } from 'react'

import axios from '../../axios'

import Local from '../../components/Local/Local'

const APPID = '887b78e46f46df567b343b367b888e91'

export default class Screen extends Component {
	constructor(props) {
		super(props)

		this.state = {
			local: null,
			conditions: null,
			info: null
		}
	}

	getLocalProperties = (id, local) => {
		axios.get('data/2.5/forecast?id=' + id + '&APPID=' + APPID)
		.then(response => {
			// console.log(response.data)
			const conditions = response.data.list.map((element, index) => {
				return {
					...element
				}
			})

			const info = response.data.city

			this.setState({
				conditions,
				info,
				local
			})
		})
	}
/* 
	setLocalAttributes = (id, name) => {
		const local = {
			'id' : id,
			'name' : name
		}

		this.setState({
			local
		})
	} */

   render() {
	return (
	  	<div>
			  
			<button
				className="button tiny"
				onClick={() => this.getLocalProperties('3451234', 'Rio Claro')}
			>
				Rio Claro
			</button>
			
			<button
				className="button tiny"
				onClick={() => this.getLocalProperties('3449319', 'São Carlos')}
			>
				São Carlos
			</button>
			
			<button
				className="button tiny"
				onClick={() => this.getLocalProperties('3457509', 'Matão')}
			>
				Matão
			</button>

			{
			this.state.conditions ?
			<Local
				name={this.state.local}
				id={this.state.info['id']}
				date={this.state.conditions[0].dt_txt}
				temp={this.state.conditions[0].main.temp}
				maxTemp={this.state.conditions[0].main.temp_max}
				minTemp={this.state.conditions[0].main.temp_min}
				description={this.state.conditions[0].weather[0].description}
				icon={this.state.conditions[0].weather[0].icon}
				iconId={this.state.conditions[0].weather[0].id}
			/>			
			:
			<div>
				<p>Card sem informações</p>
			</div>			
			}

			<div>
				<button
					className="button medium"
				>
					Mostrar Máx/Min
				</button>
			</div>

	  	</div>
	)
  }
}

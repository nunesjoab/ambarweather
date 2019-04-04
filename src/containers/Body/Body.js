import React, { Component } from 'react'

import {connect} from 'react-redux'

import '../../css/buttons.css'

import axios from '../../axios'

import Local from '../../components/Local/Local'
import CmpTemps from '../../components/CmpTemps/CmpTemps'

const APPID = '887b78e46f46df567b343b367b888e91'

class Screen extends Component {
	constructor(props) {
		super(props)

		this.state = {
			local: null,
			conditions: null,
			info: null,
			maxTemp: 0,
			minTemp: 0
		}
	}

	getLocalProperties = (id, local) => {
		axios.get('data/2.5/forecast?id=' + id + '&APPID=' + APPID)
		.then(response => {
			console.log(response.data)
			const conditions = response.data.list.map((element, index) => {
				return {
					...element
				}
			})

			const info = response.data.city

			this.setState({
				conditions,
				info,
				local,
				maxTemp: conditions[0].main.temp_max,
				minTemp: conditions[0].main.temp_min
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
			<div className={"body"}>
				
				<button
					className="button tiny"
					onClick={() => this.getLocalProperties('3451234', 'Rio Claro')}
					onMouseDown={this.props.checkTemperatures}
				>
					Rio Claro
				</button>
				
				<button
					className="button tiny"
					onClick={() => this.getLocalProperties('3449319', 'São Carlos')}
					onMouseDown={this.props.checkTemperatures}
				>
					São Carlos
				</button>
				
				<button
					className="button tiny"
					onClick={() => this.getLocalProperties('3457509', 'Matão')}
					onMouseDown={this.props.checkTemperatures}
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
					humidity={this.state.conditions[0].main.humidity}
					description={this.state.conditions[0].weather[0].description}
					icon={this.state.conditions[0].weather[0].icon}
					iconId={this.state.conditions[0].weather[0].id}
				/>			
				:
				<div className={"card no-info"}>
					<i className={"wi wi-direction-up"}></i><p>Clique em uma das cidades acima</p>
				</div>			
				}

				<div>
					<button
						className={"button medium"}
					>
						Mostrar Máx/Min
					</button>

					<CmpTemps
						max={this.props.mxTemp}
					/>
				</div>

			</div>
		)
  	}
}

const mapStateToProps = state => {
	return {
		mxTemp: state.maxTemp
	};
}

const mapDispatchToProps = dispatch => {
	return {
		checkTemperatures: () => dispatch({type: 'CHECK', temp: 10})
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Screen);

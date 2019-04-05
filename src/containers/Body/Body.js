import React, { Component } from 'react'

import {connect} from 'react-redux'

import '../../css/buttons.css'

import axios from '../../axios'

import Local from '../../components/Local/Local'
import CmpTemps from '../../components/CmpTemps/CmpTemps'

const APPID = '887b78e46f46df567b343b367b888e91'

class Body extends Component {
	constructor(props) {
		super(props)

		this.state = {
			local: null,
			conditions: null,
			info: null,
			maxTemp: 0,
			minTemp: 1000
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

   render() {
		return (
			<div className={"body"}>
				
				<button
					className="button tiny"
					onClick={() => this.getLocalProperties('3451234', 'Rio Claro')}
					onMouseUp={() => this.props.checkTemperatures(this.state.maxTemp, this.state.minTemp, this.state.local)}
				>
					Rio Claro
				</button>
				
				<button
					className="button tiny"
					onClick={() => this.getLocalProperties('3449319', 'São Carlos')}
					onMouseUp={() => this.props.checkTemperatures(this.state.maxTemp, this.state.minTemp, this.state.local)}
				>
					São Carlos
				</button>
				
				<button
					className="button tiny"
					onClick={() => this.getLocalProperties('3457509', 'Matão')}
					onMouseUp={() => this.props.checkTemperatures(this.state.maxTemp, this.state.minTemp, this.state.local)}
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
						onClick={() => this.props.checkTemperatures(this.state.maxTemp, this.state.minTemp, this.state.local)}
					>
						Mostrar Máx/Min
					</button>

					<CmpTemps
						maxTemp={this.props.mxTemp}
						maxLocal={this.props.mxLocal}
						minTemp={this.props.mnTemp}
						minLocal={this.props.mnLocal}
					/>
				</div>

			</div>
		)
  	}
}

const mapStateToProps = state => {
	return {
		mxTemp: state.maxTemp,
		mxLocal: state.maxLocal,
		mnTemp: state.minTemp,
		mnLocal: state.minLocal
	};
}

const mapDispatchToProps = dispatch => {
	return {
		checkTemperatures: (mxTemp, mnTemp, local) => dispatch({type: 'CHECK', maxTemp: mxTemp, minTemp: mnTemp, local: local})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);

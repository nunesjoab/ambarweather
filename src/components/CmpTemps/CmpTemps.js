import React, { Component } from 'react'

export default class CmpTemps extends Component {
	/* constructor(props) {
		super(props)
	} */

  	render() {
		return (
			<div>
				Temperatura máxima: {this.props.max}
			</div>
		)
  	}
}

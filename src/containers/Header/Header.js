import React from 'react'

import '../../css/header.css'

export default () => {
  return (
	<div className={"header"}>
	  <div className={"logo"}><a href="#"><i className={"wi wi-day-rain-mix"}></i></a></div>
	  <div className={"slogan"}>React App que exibe informações meteorológicas da API <a href="https://openweathermap.org/current" target="_blank">Open Weather Map</a></div>
	</div>
  )
}

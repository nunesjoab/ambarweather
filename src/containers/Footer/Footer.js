import React from 'react'

import '../../css/footer.css'

export default () => {
	return (
		<div className={"footer"}>
			<div className={"info"}>
				<p><i className={"wi wi-small-craft-advisory"}></i>Autor: Joab R. Nunes</p>
				<p><i className={"wi wi-cloud-up"}></i>Projeto hospedado no <a href="https://github.com/nunesjoab" target="_blank" rel="noopener noreferrer">Github</a></p>
				<p><i className={"wi wi-wind-direction"}></i>Contatos: <a href="mailto:nunesjoab@gmail.com">e-mail</a> / <a href="https://www.linkedin.com/in/joab-nunes-0652635b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
			</div>
		</div>
	)
}

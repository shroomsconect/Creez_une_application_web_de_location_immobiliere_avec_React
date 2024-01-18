import React from 'react'
import logo from '../../assets/logo-footer.svg'
import '../../css/Footer/index.scss'

function Footer() {
	return (
		<footer className="Footer">
			<div className="kasa-logo-copyright-container">
				<img src={logo} alt="Logo Kasa" className="kasa-logo" />
				<p className="kasa-copyright">
					© 2020 Kasa. All rights reserved
				</p>
			</div>
		</footer>
	)
}

export default Footer

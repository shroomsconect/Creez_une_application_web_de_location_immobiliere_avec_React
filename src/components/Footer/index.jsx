import React from 'react'
import logo from '../../assets/logo-footer.svg'
import '../../css/Footer/index.scss'

function Footer() {
	return (
		<footer className="KASA-Footer">
			<div className="KASA-Footer-logo-copyright-container">
				<img src={logo} alt="Logo Kasa" className="KASA-Footer-logo" />
				<p className="KASA-Footer-copyright">
					© 2020 Kasa. All rights reserved
				</p>
			</div>
		</footer>
	)
}

export default Footer

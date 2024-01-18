import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-header.svg'
import '../../css/Header/index.scss'

function Header() {
	return (
		<header className="KASA-Header">
			<img src={logo} alt="Logo Kasa" className="KASA-Header-logo" />
			<nav className="KASA-Header-nav">
				<NavLink to="/" className="KASA-Header-link">
					ACCUEIL
				</NavLink>
				<NavLink to="/about" className="KASA-Header-link">
					A PROPOS
				</NavLink>
			</nav>
		</header>
	)
}

export default Header

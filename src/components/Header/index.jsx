import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-header.svg'
import '../../css/Header/index.scss'

function Header() {
	return (
		<header className="Header">
			<img src={logo} alt="Logo Kasa" className="kasa-logo" />
			<nav className="kasa-nav">
				<NavLink to="/" className="kasa-link">
					ACCUEIL
				</NavLink>
				<NavLink to="/about" className="kasa-link">
					A PROPOS
				</NavLink>
			</nav>
		</header>
	)
}

export default Header

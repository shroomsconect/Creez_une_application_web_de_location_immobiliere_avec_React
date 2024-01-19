import { Link } from 'react-router-dom'
import '../../css/Error/404.scss'

function Error404() {
	return (
		<main className="KASA-Error404">
			<h1 className="KASA-Error404-title">404</h1>
			<p className="KASA-Error404-description">
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link to="/" className="KASA-Error404-link">
				Retourner sur la page d’accueil
			</Link>
		</main>
	)
}

export default Error404

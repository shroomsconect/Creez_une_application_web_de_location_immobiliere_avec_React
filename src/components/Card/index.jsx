import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../css/Card/index.scss'

function Card({ idLodging, title, cover }) {
	const linkLodging = `/lodging/${idLodging}`

	return (
		<Link to={linkLodging} className="KASA-Card-link">
			<article className="KASA-Card">
				<div className="KASA-Card-title-container">
					<span className="KASA-Card-title">{title}</span>
				</div>
				<img className="KASA-Card-cover" src={cover} alt={title} />
			</article>
		</Link>
	)
}

Card.propTypes = {
	idLodging: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
}

export default Card

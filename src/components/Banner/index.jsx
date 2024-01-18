import PropTypes from 'prop-types'
import '../../css/Banner/index.scss'

function Banner({ title, cover }) {
	return (
		<div className="KASA-Banner">
			<h1 className="KASA-Banner-title">{title}</h1>
			<img
				className="KASA-Banner-cover"
				src={cover}
				alt="Arrière plan bannière"
			/>
		</div>
	)
}

Banner.propTypes = {
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	cover: PropTypes.string.isRequired,
}

Banner.defaultProps = {
	title: '',
}

export default Banner

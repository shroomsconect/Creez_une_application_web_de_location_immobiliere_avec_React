import PropTypes from 'prop-types'
import '../../css/RatingStar/index.scss'

function RatingStar({ count }) {
	var starList = []
	for (var i = 1; i <= 5; i++) {
		const isBright = count >= i ? '-bright' : ''
		starList.push(
			<span
				className={`KASA-RatingStar-star${isBright}`}
				key={`star-${i}`}
			></span>,
		)
	}

	return <div className="KASA-RatingStar">{starList}</div>
}

RatingStar.propTypes = {
	count: PropTypes.number.isRequired,
}

RatingStar.defaultProps = {
	count: 0,
}

export default RatingStar

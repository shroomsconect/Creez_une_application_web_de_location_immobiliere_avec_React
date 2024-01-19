import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../css/Collapse/index.scss'

function Collapse({ id, title, description, open }) {
	const [isOpened, setIsOpened] = useState(open)
	const idCollapse = `KASA-Collapse-${id}`

	const toggleIsOpenedCollapse = () => {
		setIsOpened(!isOpened)
	}

	useEffect(() => {
		const collapse = document.getElementById(idCollapse)
		const titleCollapse = collapse.querySelector('.KASA-Collapse-title')
		const descriptionCollapse = collapse.querySelector(
			'.KASA-Collapse-description',
		)

		if (isOpened) {
			collapse.style.height = collapse.scrollHeight + 'px'
			descriptionCollapse.style.transform = 'translateY(0)'
			titleCollapse.classList.add('rotate')
		} else {
			collapse.style.height = ''
			descriptionCollapse.style.transform = ''
			titleCollapse.classList.remove('rotate')
		}
	}, [isOpened, idCollapse])

	return (
		<article className="KASA-Collapse" id={idCollapse}>
			<h2
				className="KASA-Collapse-title"
				onClick={toggleIsOpenedCollapse}
			>
				{title}
			</h2>
			<p className="KASA-Collapse-description">{description}</p>
		</article>
	)
}

Collapse.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
}

Collapse.defaultProps = {
	open: false,
}

export default Collapse

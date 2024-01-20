import { useState } from 'react'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import '../../css/Slideshow/index.scss'

function Slideshow({ pictures }) {
	const [slidePosition, setSlidePosition] = useState(0)
	const slideLenght = pictures.length
	const isNotOneSlide = slideLenght > 1

	function slideTo(direction) {
		if (direction === 'left') {
			if (slidePosition === 0) {
				setSlidePosition(slideLenght - 1)
			} else {
				setSlidePosition(slidePosition - 1)
			}
		} else if (direction === 'right') {
			if (slidePosition === slideLenght - 1) {
				setSlidePosition(0)
			} else {
				setSlidePosition(slidePosition + 1)
			}
		}
	}

	return (
		<div className="KASA-Slideshow">
			{isNotOneSlide && (
				<img
					className="KASA-Slideshow-arrow-left"
					src={arrowLeft}
					alt="<"
					onClick={() => {
						slideTo('left')
					}}
				/>
			)}

			<img
				className="KASA-Slideshow-banner-img"
				src={pictures[slidePosition]}
				alt="Bannière du logement"
			/>

			{isNotOneSlide && (
				<img
					className="KASA-Slideshow-arrow-right"
					src={arrowRight}
					alt=">"
					onClick={() => {
						slideTo('right')
					}}
				/>
			)}

			{isNotOneSlide && (
				<div className="KASA-Slideshow-index">{`${slidePosition + 1}/${slideLenght}`}</div>
			)}
		</div>
	)
}

export default Slideshow

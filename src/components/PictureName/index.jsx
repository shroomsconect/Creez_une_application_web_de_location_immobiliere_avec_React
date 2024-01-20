import '../../css/PictureName/index.scss'

function PictureName({ picture, name }) {
	return (
		<div className="KASA-PictureName">
			<h2 className="KASA-PictureName-name">{name}</h2>
			<img
				className="KASA-PictureName-picture"
				src={picture}
				alt="l'hébergeur"
			/>
		</div>
	)
}

export default PictureName

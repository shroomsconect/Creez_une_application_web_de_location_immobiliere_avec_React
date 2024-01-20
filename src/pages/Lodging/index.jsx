import { useParams } from 'react-router-dom'
import lodgingDataList from '../../datas/logements.json'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import PictureName from '../../components/PictureName'
import RatingStar from '../../components/RatingStar'
import Collapse from '../../components/Collapse'
import '../../css/Lodging/index.scss'

function Lodging() {
	const { idLodging } = useParams()
	const lodging = lodgingDataList.find(
		(lodgingData) => lodgingData.id === idLodging,
	)

	return (
		<main className="KASA-Lodging">
			<Slideshow pictures={lodging.pictures} />
			<div className="KASA-Lodging-header-info">
				<div className="KASA-Lodging-titles">
					<h1>{lodging.title}</h1>
					<h2>{lodging.location}</h2>
					<div className="KASA-Lodging-tags">
						{lodging.tags.map((tag, index) => (
							<Tag key={tag + index} tag={tag} />
						))}
					</div>
				</div>
				<div className="KASA-Lodging-host-and-rating">
					<PictureName
						picture={lodging.host.picture}
						name={lodging.host.name}
					/>
					<RatingStar count={parseInt(lodging.rating)} />
				</div>
			</div>
			<div className="KASA-Lodging-main-info">
				<Collapse
					id="lodging-1"
					title="Description"
					description={lodging.description}
				/>
				<Collapse
					id="lodging-2"
					title="Équipements"
					description={lodging.equipments}
				/>
			</div>
		</main>
	)
}

export default Lodging

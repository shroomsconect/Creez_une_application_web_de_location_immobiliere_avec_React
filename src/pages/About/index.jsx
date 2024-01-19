import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import bannerImg from '../../assets/bg-banner-about.jpg'
import aboutDataList from '../../datas/abouts.json'
import '../../css/About/index.scss'

function About() {
	return (
		<main className="KASA-About">
			<Banner cover={bannerImg} />
			<div className="KASA-About-liste">
				{aboutDataList.map((aboutData, index) => (
					<Collapse
						key={aboutData.title + index}
						id={'about-' + index}
						title={aboutData.title}
						description={aboutData.description}
					/>
				))}
			</div>
		</main>
	)
}

export default About

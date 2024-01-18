import React from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import bannerImg from '../../assets/bg-banner-home.jpg'
import lodgingDataList from '../../datas/logements.json'
import '../../css/Home/index.scss'

function Home() {
	const titleBanner = (
		<React.Fragment>
			{'Chez vous, '}
			<span className="KASA-no-break">partout et ailleurs</span>
		</React.Fragment>
	)

	return (
		<main className="KASA-Home">
			<Banner title={titleBanner} cover={bannerImg} />
			<div className="KASA-Home-lodging-liste">
				{lodgingDataList.map((lodgingData) => (
					<Card
						key={lodgingData.id}
						idLodging={lodgingData.id}
						title={lodgingData.title}
						cover={lodgingData.cover}
					/>
				))}
			</div>
		</main>
	)
}

export default Home

import logo from '../../assets/logo.svg'
import '../../css/Home/index.scss'

function Home() {
	return (
		<main className="Home">
			<header className="Home-header">
				<img src={logo} className="Home-logo" alt="logo" />
				<p>
					Edit <code>src/pages/Home/</code> and save to reload.
				</p>
				<a
					className="Home-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</main>
	)
}

export default Home

import { createBrowserRouter as createRouter, Outlet } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'

import Error404 from '../Error/404'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Lodging from '../../pages/Lodging'

import lodgingDataList from '../../datas/logements.json'

const Layout = () => (
	<>
		<Header />
		<Outlet />
		<Footer />
	</>
)

const router = createRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/lodging/:idLodging',
				element: <Lodging />,
				errorElement: <Error404 />,
				loader: ({ params }) => {
					const lodgingExist = lodgingDataList.some(
						(obj) => obj.id === params.idLodging,
					)
					if (!lodgingExist)
						throw new Response('Not Found', { status: 404 })
					else return null
				},
			},
			{
				path: '*',
				element: <Error404 />,
			},
		],
	},
])

export default router

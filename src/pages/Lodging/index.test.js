import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Lodging from './'

describe('The Lodging component', () => {
	const idLodging = 'b9123946'

	it('should render title', () => {
		render(
			<MemoryRouter initialEntries={[`/lodging/${idLodging}`]}>
				<Routes>
					<Route path="/lodging/:idLodging" element={<Lodging />} />
				</Routes>
			</MemoryRouter>,
		)

		const element = screen.getByText(
			'Magnifique appartement proche Canal Saint Martin',
		)
		expect(element).toBeInTheDocument()
	})

	it('should render subtitle', () => {
		render(
			<MemoryRouter initialEntries={[`/lodging/${idLodging}`]}>
				<Routes>
					<Route path="/lodging/:idLodging" element={<Lodging />} />
				</Routes>
			</MemoryRouter>,
		)

		const element = screen.getByText('Ile de France - Paris 10e')
		expect(element).toBeInTheDocument()
	})

	it('should render host name', () => {
		render(
			<MemoryRouter initialEntries={[`/lodging/${idLodging}`]}>
				<Routes>
					<Route path="/lodging/:idLodging" element={<Lodging />} />
				</Routes>
			</MemoryRouter>,
		)

		const element = screen.getByText('Della Case')
		expect(element).toBeInTheDocument()
	})

	it('should render tag name', () => {
		render(
			<MemoryRouter initialEntries={[`/lodging/${idLodging}`]}>
				<Routes>
					<Route path="/lodging/:idLodging" element={<Lodging />} />
				</Routes>
			</MemoryRouter>,
		)

		const element = screen.getByText('Canal Saint Martin')
		expect(element).toBeInTheDocument()
	})

	it('should render equipment', () => {
		render(
			<MemoryRouter initialEntries={[`/lodging/${idLodging}`]}>
				<Routes>
					<Route path="/lodging/:idLodging" element={<Lodging />} />
				</Routes>
			</MemoryRouter>,
		)

		const element = screen.getByText('Sèche Cheveux')
		expect(element).toBeInTheDocument()
	})
})

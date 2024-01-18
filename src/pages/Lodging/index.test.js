import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Lodging from './'

describe('The Lodging component', () => {
	it('should render text', () => {
		const idLodging = '1'

		render(
			<MemoryRouter initialEntries={[`/lodging/${idLodging}`]}>
				<Routes>
					<Route path="/lodging/:idLodging" element={<Lodging />} />
				</Routes>
			</MemoryRouter>,
		)

		const element = screen.getByText(`Lodging : ${idLodging}`)
		expect(element).toBeInTheDocument()
	})
})

import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import Home from './'

describe('The Home page', () => {
	it('should render title', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>,
		)
		expect(
			screen.getByRole('heading', {
				level: 1,
				text: 'Chez vous, partout et ailleurs',
			}),
		).toBeTruthy()
	})
})

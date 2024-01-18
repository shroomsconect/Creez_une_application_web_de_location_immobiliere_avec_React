import { render, screen } from '@testing-library/react'
import Home from './'

describe('The Home component', () => {
	it('should renders learn react link', () => {
		render(<Home />)
		const linkElement = screen.getByText(/learn react/i)
		expect(linkElement).toBeInTheDocument()
	})
})

import { render, screen } from '@testing-library/react'
import About from './'

describe('The About component', () => {
	it('should render text', () => {
		render(<About />)
		const element = screen.getByText('About')
		expect(element).toBeInTheDocument()
	})
})

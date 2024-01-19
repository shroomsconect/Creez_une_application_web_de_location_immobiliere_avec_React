import { render } from '@testing-library/react'
import About from './'

describe('The About page', () => {
	it('should render one cover Banner', () => {
		const { container } = render(<About />)

		const coverBannerElement =
			container.getElementsByClassName('KASA-Banner-cover')

		expect(coverBannerElement.length).toBe(1)
	})
})

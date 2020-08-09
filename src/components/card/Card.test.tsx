import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Card } from './Card'

describe('Card', () => {
  it('renders without crashing', () => {
    render(<Card title="Test" />)
  })

  it('fire the onclick event if passed in', () => {
    const mockFn = jest.fn()
    const el = render(<Card title="Test" onClick={mockFn} />)

    const card = el.queryByRole('button')
    if (card) {
      fireEvent.click(card)
    }

    expect(mockFn).toHaveBeenCalled()
  })

  it('shows the image if a url is passed in', () => {
    const testTitle = 'TestTitle'
    const el = render(<Card title={testTitle} imgUrl="testImgUrl" />)

    const img = el.queryByAltText(testTitle)
    const noImageFound = el.queryByText('No Image Found')

    expect(noImageFound).toBeNull()
    expect(img).not.toBeNull()
  })

  it('shows "No Image Found" if no url is passed in', () => {
    const testTitle = 'TestTitle'
    const el = render(<Card title={testTitle} />)

    const img = el.queryByAltText(testTitle)
    const noImageFound = el.queryByText('No Image Found')

    expect(noImageFound).not.toBeNull()
    expect(img).toBeNull()
  })
})

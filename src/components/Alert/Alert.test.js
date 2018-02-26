/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { Alert } from './Alert'

describe('Alert', () => {
  let renderedComponent
  let mockMessage
  let mockClose

  beforeEach(() => {
    mockMessage = "I am the message"
    mockClose = jest.fn()
    renderedComponent = shallow(<Alert message={mockMessage} close={mockClose} />)
  })

  it('should match snapshot', () => {

    expect(renderedComponent).toMatchSnapshot()
  })
})

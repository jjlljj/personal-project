/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import About from './About'

describe('About', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<About />)
  })

  it('should match snapshot', () => {

    expect(renderedComponent).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import Nav from './Nav'

describe('Nav', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<Nav />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { Main } from './Main'

describe('Main', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<Main />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})

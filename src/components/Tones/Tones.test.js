/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { Tones } from './Tones'

describe('Tones', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<Tones />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})

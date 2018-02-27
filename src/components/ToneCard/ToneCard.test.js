/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { ToneCard } from './ToneCard'

describe('ToneCard', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<ToneCard />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})

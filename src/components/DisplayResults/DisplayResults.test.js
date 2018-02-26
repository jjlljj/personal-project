/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { DisplayResults } from './DisplayResults'
import { mockCleaned, mockCleaned2 } from '../../__mocks__/mockData'

describe('DisplayResults', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<DisplayResults sentences={ mockCleaned.sentences } />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it.skip('shuold match snapshot when passed different results', () => {
    renderedComponent = shallow(<DisplayResults sentences={ mockCleaned2 } />)

    expect(renderedComponent).toMatchSnapshot()
  })
})

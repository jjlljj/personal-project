import React from 'react'
import { shallow } from 'enzyme'
import { DisplayResults } from './DisplayResults'
import { mockResponse, mockResponse2 } from '../../__mocks__/mockData'

describe('DisplayResults', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<DisplayResults results={ mockResponse } />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('shuold match snapshot when passed different results', () => {
    renderedComponent = shallow(<DisplayResults results={ mockResponse2 } />)

    expect(renderedComponent).toMatchSnapshot()
  })
})

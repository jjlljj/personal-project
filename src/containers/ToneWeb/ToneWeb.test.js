/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { ToneWeb } from './ToneWeb'
import { mockCleaned, mockCleaned2 } from '../../__mocks__/mockData'

describe('ToneWeb', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<ToneWeb documentTone={ mockCleaned.documentTone }
       />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when passed different results', () => {
    renderedComponent = shallow(<ToneWeb documentTone={ mockCleaned2.documentTone } />)

    expect(renderedComponent).toMatchSnapshot()
  })

  it('formatData should return the array of data to chart', () => {
    const expected = [
      [
        {"axis": "Analytical", "value": 0.883842}, 
        {"axis": "Tentative", "value": 0.60858}, 
        {"axis": "Joy", "value": 0.519797}
      ]
    ]
    const result = renderedComponent.instance().formatData()
    expect(result).toEqual(expected)
  })
})

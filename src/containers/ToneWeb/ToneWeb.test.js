/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { ToneWeb } from './ToneWeb'
import { cleanWebChartData } from '../../dataHelper/dataHelper'
import { mockCleaned, mockCleaned2 } from '../../__mocks__/mockData'

describe('ToneWeb', () => {
  let renderedComponent
  let mockChartData

  beforeEach(() => {
    mockChartData = [cleanWebChartData(mockCleaned.documentTone)]

    renderedComponent = shallow(<ToneWeb data={ mockChartData }
       />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when passed different results', () => {
    mockChartData = [cleanWebChartData(mockCleaned2.documentTone)]

    renderedComponent = shallow(<ToneWeb data={ mockChartData } />)

    expect(renderedComponent).toMatchSnapshot()
  })

})

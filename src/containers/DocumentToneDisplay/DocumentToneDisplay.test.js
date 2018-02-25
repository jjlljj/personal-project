/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { DocumentToneDisplay } from './DocumentToneDisplay'
import { mockCleaned, mockCleaned2 } from '../../__mocks__/mockData'

describe('DocumentToneDisplay', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<DocumentToneDisplay documentTone={ mockCleaned.documentTone } />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when passed different results', () => {
    renderedComponent = shallow(<DocumentToneDisplay documentTone={ mockCleaned2.documentTone } />)

    expect(renderedComponent).toMatchSnapshot()
  })
})

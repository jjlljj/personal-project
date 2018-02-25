/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { DocumentToneDisplay } from './DocumentToneDisplay'
import { mockCleaned, mockCleaned2 } from '../../__mocks__/mockData'

describe('DocumentToneDisplay', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<DocumentToneDisplay sentences={ mockCleaned.documentTone } />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it.skip('shuold match snapshot when passed different results', () => {
    // add 2nd mockCleaned data to render
    renderedComponent = shallow(<DocumentToneDisplay sentences={ mockCleaned2 } />)

    expect(renderedComponent).toMatchSnapshot()
  })
})

/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { DocumentToneDisplay } from './DocumentToneDisplay'
import { mockCleaned } from '../../__mocks__/mockData'

describe('DocumentToneDisplay', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<DocumentToneDisplay sentences={ mockCleaned.sentences } />)
  })

  it('should not pass', () => {
    expect(false).toEqual(true)
  })

  it.skip('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it.skip('shuold match snapshot when passed different results', () => {
    // add 2nd mockCleaned data to render
    renderedComponent = shallow(<DocumentToneDisplay sentences={ mockCleaned } />)

    expect(renderedComponent).toMatchSnapshot()
  })
})

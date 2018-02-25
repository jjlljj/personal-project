/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { SentencesToneDisplay } from './SentencesToneDisplay'
import { mockCleaned, mockCleaned2 } from '../../__mocks__/mockData'

describe('SentencesToneDisplay', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<SentencesToneDisplay sentences={ mockCleaned.sentences } />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when passed different results', () => {
    renderedComponent = shallow(<SentencesToneDisplay sentences={ mockCleaned2.sentences } />)

    expect(renderedComponent).toMatchSnapshot()
  })
})

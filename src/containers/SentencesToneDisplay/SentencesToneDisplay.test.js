/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { SentencesToneDisplay } from './SentencesToneDisplay'
import { mockCleaned, mockCleaned2 } from '../../__mocks__/mockData'

describe('SentencesToneDisplay', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<SentencesToneDisplay 
        sentences={ mockCleaned.sentences }
        sentencesTone={ mockCleaned.sentencesTone }
       />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when passed different results', () => {
    renderedComponent = shallow(<SentencesToneDisplay 
        sentences={ mockCleaned2.sentences }
        sentencesTone={ mockCleaned2.sentencesTone }
       />)

    expect(renderedComponent).toMatchSnapshot()
  })

  it('handleToggle should set state with the expected params', () => {
    const mockEvent = { target: { name: "secondary" }, preventDefault: jest.fn() }
    const expected1 = {
      sentencesView: "primary",
      primary: 'active',
      secondary: '',
      toneIndex: 0
    }
    const expected2 = {
      sentencesView: "secondary",
      primary: '',
      secondary: 'active',
      toneIndex: 1
    }
    expect(renderedComponent.state()).toEqual(expected1)
    renderedComponent.instance().handleToggle(mockEvent)
    expect(renderedComponent.state()).toEqual(expected2)
  })
})

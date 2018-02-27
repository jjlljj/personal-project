/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { SentenceView } from './SentenceView'
import { mockCleaned } from '../../__mocks__/mockData'

describe('SentenceView', () => {
  let renderedComponent
  let mockSentences
  let mockId

  beforeEach(() => {
    mockSentences = mockCleaned.sentences
    mockId = 1
    renderedComponent = shallow(<SentenceView sentences={mockSentences} sentence_id={mockId} />)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})

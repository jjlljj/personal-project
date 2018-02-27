/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { Example } from './Example'
import { mockText, mockResponse, mockCleaned } from '../../__mocks__/mockData'

jest.mock('../../dataHelper/dataHelper')

describe('Example', () => {
  let mockAddResult 
  let mockAddSentences
  let mockAddDocumentTone
  let mockAddSentencesTone
  let renderedComponent
  let mockHistory
  let mockDocumentTone
  let mockSentences

   beforeEach(() => {
    window.fetch = jest.fn()
    mockAddResult = jest.fn()
    mockAddSentences = jest.fn()
    mockAddDocumentTone = jest.fn()
    mockAddSentencesTone = jest.fn()
    mockHistory = { push: jest.fn() }
    mockDocumentTone = mockCleaned.documentTone
    mockSentences = mockCleaned.sentences
    renderedComponent = shallow(
      <Example 
        addResult={ mockAddResult }
        addDocumentTone={ mockAddDocumentTone }
        addSentencesTone={ mockAddSentencesTone }
        addSentences={ mockAddSentences }
        history={ mockHistory }
        documentTone={ mockDocumentTone }
        sentences={ mockSentences }
        />, {disableLifecycleMethods: true}
    )
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('handleExample should call the toneExampleFetch', () => {
    const mockSubmitEvent = { preventDefault: jest.fn() }

    renderedComponent.instance().handleExample(mockSubmitEvent)

    expect(window.fetch).toHaveBeenCalled()
  })

  it('handleExample should call the action addResults with the expected params', async () => {
    
    expect(mockAddResult).not.toHaveBeenCalled()

    renderedComponent.instance().handleExample()

    expect(await mockAddResult).toHaveBeenCalledWith(mockCleaned)
  })

  it('handleExample should call the action addDocumentTone with the expected params', async () => {
    const mockSubmitEvent = { preventDefault: jest.fn() }
    
    expect(mockAddDocumentTone).not.toHaveBeenCalled()

    renderedComponent.instance().handleExample(mockSubmitEvent)

    expect(await mockAddDocumentTone).toHaveBeenCalledWith(mockCleaned.documentTone)
  })

  it('handleExample should call the action addSentences with the expected params', async () => {
    
    expect(mockAddSentences).not.toHaveBeenCalled()

    renderedComponent.instance().handleExample()

    expect(await mockAddSentences).toHaveBeenCalledWith(mockCleaned.sentences)
  })

  it('handleResults should call the action addResults with the expected params', () => {
    expect(mockAddResult).not.toHaveBeenCalled()

    renderedComponent.instance().handleResults(mockCleaned)

    expect(mockAddResult).toHaveBeenCalledWith(mockCleaned)
  })

  it('handleResults should call the action addDocumentTone with the expected params', () => {
    
    expect(mockAddDocumentTone).not.toHaveBeenCalled()

    renderedComponent.instance().handleResults(mockCleaned)

    expect(mockAddDocumentTone).toHaveBeenCalledWith(mockCleaned.documentTone)
  })

  it('handleResults should call the action addSentences with the expected params', async () => {
    
    expect(mockAddSentences).not.toHaveBeenCalled()

    renderedComponent.instance().handleResults(mockCleaned)

    expect(mockAddSentences).toHaveBeenCalledWith(mockCleaned.sentences)
  })


})
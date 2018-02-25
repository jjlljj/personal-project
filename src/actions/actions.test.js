/* eslint-disable */
import *  as actions from './index'
import { mockCleaned } from '../__mocks__/mockData'

describe('actions', () => {

  it('addResult should return a type of ADD_RESULT with a single result', () => {
    const expected = {
      type: 'ADD_RESULT',
      result: mockCleaned
    }

    expect(actions.addResult(mockCleaned)).toEqual(expected)
  }) 

  it('addSentences should return a type of ADD_SENTENCES with an array of sentences', () => {
    const expected = {
      type: 'ADD_SENTENCES',
      sentences: mockCleaned.sentences
    }

    expect(actions.addSentences(mockCleaned.sentences)).toEqual(expected)
  })

  it('clearSentences should return a type of CLEAR_SENTENCES', () => {
    const expected = {
      type: 'CLEAR_SENTENCES'
    }

    expect(actions.clearSentences()).toEqual(expected)
  })

  it('addDocumentTone should return a type of ADD_DOCUMENT_TONE with an array of document tones', () => {
    const expected = {
      type: 'ADD_DOCUMENT_TONE',
      documentTone: mockCleaned.documentTone
    }

    expect(actions.addDocumentTone(mockCleaned.documentTone)).toEqual(expected)
  })

  it('clearDocumentTone should return a type of CLEAR_DOCUMENT_TONE', () => {
    const expected = {
      type: 'CLEAR_DOCUMENT_TONE'
    }

    expect(actions.clearDocumentTone()).toEqual(expected)
  })

  it('addSentencesTone should return a type of ADD_SENTENCES_TONE with an object of tone arrays', () => {
    const expected = {
      type: 'ADD_SENTENCES_TONE',
      sentencesTone: mockCleaned.sentencesTone
    }

    expect(actions.addSentencesTone(mockCleaned.sentencesTone)).toEqual(expected)
  })
})
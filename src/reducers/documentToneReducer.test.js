import { documentToneReducer } from './documentToneReducer'
import * as actions from '../actions/index'
import { mockCleaned } from '../__mocks__/mockData'

describe('documentToneReducer', () => {

  it('should return the default state', () => {
    expect(documentToneReducer(undefined, {})).toEqual([])
  })

  it('ADD_DOCUMENT_TONE should return the array of tone objects', () => {
    const action = actions.addDocumentTone(mockCleaned.documentTone)
    const expected = mockCleaned.documentTone

    expect(documentToneReducer(undefined, action)).toEqual(expected)
  })

  it('CLEAR_DOCUMENT_TONE should return the empty document tone array', () =>  {
    const action = actions.clearDocumentTone()
    const state = mockCleaned.documentTone
    const expected = []
    
    expect(documentToneReducer(state, action)).toEqual(expected)
  })


})
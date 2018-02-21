import { sentencesReducer } from './sentencesReducer'
import { mockCleaned } from '../__mocks__/mockData'
import * as actions from '../actions/index'

describe('sentencesReducer', () => {

  it('should return the default state', () => {
    expect(sentencesReducer(undefined, {})).toEqual([])
  })

  it('ADD_SENTENCES return the array of sentence objects', () => {
    const action = actions.addSentences(mockCleaned.sentences)
    const expected = mockCleaned.sentences

    expect(sentencesReducer(undefined, action)).toEqual(expected)
  })

  it('CLEAR_SENTENCES should return the empty sentences array', () => {
    const action = actions.clearSentences()
    const state = mockCleaned.sentences
    const expected = []
    
    expect(sentencesReducer(state, action)).toEqual(expected)
  })
})
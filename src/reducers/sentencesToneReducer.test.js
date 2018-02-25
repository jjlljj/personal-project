/* eslint-disable */
import { sentencesToneReducer } from './sentencesToneReducer'
import * as actions from '../actions/index'
import { mockCleaned } from '../__mocks__/mockData'

describe('sentencesToneReducer', () => {

  it('should return the default state', () => {
    expect(sentencesToneReducer(undefined, {})).toEqual({})
  })

  it('ADD_DOCUMENT_TONE should return the array of tone objects', () => {
    const action = actions.addSentencesTone(mockCleaned.sentencesTone)
    const expected = mockCleaned.sentencesTone

    expect(sentencesToneReducer(undefined, action)).toEqual(expected)
  })
})
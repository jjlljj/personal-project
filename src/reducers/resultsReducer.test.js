/* eslint-disable */
import { resultsReducer } from './resultsReducer'
import * as actions from '../actions/index.js'
import { mockResponse, mockResponse2 } from '../__mocks__/mockData'

describe('resultsReducer', () => {
  it('should return the default state', () => {
    expect(resultsReducer(undefined, {})).toEqual([])
  })

  it('ADD_RESULT should return the state with added result', () => {
    const action = actions.addResult(mockResponse)
    const action2 = actions.addResult(mockResponse2)
    const newState = [mockResponse] 

    expect(resultsReducer(undefined, action)).toEqual(newState)

    expect(resultsReducer(newState, action2)).toEqual([mockResponse2, mockResponse])
  })
})
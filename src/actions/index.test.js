import *  as actions from './index'
import { mockResponse, mockResponse2 } from '../__mocks__/mockData'

describe('actions', () => {

  describe('addResult', () => {

    it('should return a type of ADD_RESULT with a single result', () => {
      const expected = {
        type: 'ADD_RESULT',
        result: mockResponse
      }

      expect(actions.addResult(mockResponse)).toEqual(expected)
    }) 
  })

})
import { toneFetch, mockFetch } from './dataHelper'
import { mockResponse } from '../__mocks__/mockData'

describe('dataHelper', () => {

  describe('toneFetch', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockResponse)
      }))
    })

    it('should call fetch with the expected response', () => {

    })
  
  })
})
import { toneFetch, mockFetch } from './dataHelper'
import { mockText, mockExpected, mockResponse } from '../__mocks__/mockData'

describe('dataHelper', () => {

  describe('toneFetch', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockResponse)
      }))
    })

    it('should call fetch with the expected response', () => {
      const expectedUrl = '/analyze'
      
      expect(window.fetch).not.toHaveBeenCalled()

      toneFetch(mockText)

      expect(window.fetch).toHaveBeenCalledWith(expectedUrl, mockExpected)
    })

    it('should return a response object', () => {
      const response = toneFetch(mockText)

      expect(response).resolves.toEqual(mockResponse)
    })

    it('should handle an error if the response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

      const response = toneFetch()
      const expected = Error("Unable to get text's tone")

      expect(response).rejects.toEqual(expected)
    })
  })

  describe('mockFetch', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockResponse)
      }))
    })

    it('should call fetch with the expected response', () => {
      const expectedUrl = '/mockAnalyze'
      
      expect(window.fetch).not.toHaveBeenCalled()

      mockFetch(mockText)

      expect(window.fetch).toHaveBeenCalledWith(expectedUrl, mockExpected)
    })

    it('should return a response object', () => {
      const response = mockFetch(mockText)

      expect(response).resolves.toEqual(mockResponse)
    })

    it('should handle an error if the response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

      const response = mockFetch()
      const expected = Error("Unable to fetch mock data")

      expect(response).rejects.toEqual(expected)
    })
  })
})
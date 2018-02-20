import { toneFetch, mockFetch, cleanTones, cleanDocumentTone, cleanSentences, cleanTone, cleanToneCategories, filterAndSort } from './dataHelper'
import { mockText, mockExpected, mockResponse, mockCleaned, mockUncleaned, mockMergedTonesArray } from '../__mocks__/mockData'

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

  describe('cleanTones', () => {
    it('should return an object with the expected cleaned data', () => {
      const result = cleanTones(mockUncleaned)

      expect(result).toEqual(mockCleaned)
    })
  })

  describe('cleanDocumentTone', () => {
    it('should return an array of expected cleaned document tone objects', () => {
      const result = cleanDocumentTone(mockUncleaned)
      const expected = mockCleaned.documentTone

      expect(result).toEqual(expected)
    })
  })

  describe('cleanSentences', () => {
    it('should return the expected array of cleaned sentence objects', () => {
      const result = cleanSentences(mockUncleaned)
      const expected = mockCleaned.sentences

      expect(result).toEqual(expected)
    })
  })

  describe('cleanTone', () => {
    it('should return the expected array of tone objects', () => {
      const result = cleanTone(mockUncleaned.sentences_tone[0], 0.2)
      const expected = mockCleaned.sentences[0].tones

      expect(result).toEqual(expected)

    })
  })

  describe('cleanToneCategories', () => {
    it('should return the expected merged array of tone objects', () => {
      const result = cleanToneCategories(mockUncleaned.sentences_tone[0].tone_categories)

      expect(result).toEqual(mockMergedTonesArray)
    })
  })

  describe('filterAndSort', () => {
    it('should return the filtered and sorted array of tone objects', () => {
      const result = filterAndSort(mockMergedTonesArray, .3)
      const expected = [
        {"score": 0.897416, "tone_id": "analytical", "tone_name": "Analytical"}, 
        {"score": 0.647986, "tone_id": "tentative", "tone_name": "Tentative"}, 
        {"score": 0.44646, "tone_id": "sadness", "tone_name": "Sadness"}
      ]

      expect(result).toEqual(expected)
    })
  })
})
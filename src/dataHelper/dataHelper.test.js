/* eslint-disable */
import { toneFetch, toneExampleFetch, cleanTones, cleanDocumentTone, cleanSentences, cleanTone, cleanToneCategories, filterAndSort, cleanWebChartData, cleanSentencesTone, withoutDupes } from './dataHelper'
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

  describe('toneExampleFetch', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockResponse)
      }))
    })

    it('should call fetch with the expected response', () => {
      const expectedUrl = '/mockAnalyze'
      
      expect(window.fetch).not.toHaveBeenCalled()

      toneExampleFetch(mockText)

      expect(window.fetch).toHaveBeenCalledWith(expectedUrl, mockExpected)
    })

    it('should return a response object', () => {
      const response = toneExampleFetch(mockText)

      expect(response).resolves.toEqual(mockResponse)
    })

    it('should handle an error if the response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

      const response = toneExampleFetch()
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

  describe('cleanWebChartData', () => {
    it('should return the expected array of data formatted for the toneWeb chart', () => {
      const expected = [
        {"axis": "Analytical", "value": 0.883842}, 
        {"axis": "Tentative", "value": 0.60858}, 
        {"axis": "Joy", "value": 0.519797}
      ]

      const result = cleanWebChartData(mockCleaned.documentTone)

      expect(result).toEqual(expected)
    })
  })

  describe('cleanSentencesTone',() => {
    it('should return the expected object with primary and secondary sentence tones', () => {
      const expected = {
        "primary": [
          {"score": 0.897416, "tone_id": "analytical", "tone_name": "Analytical"}, 
          {"score": 0.580387, "tone_id": "joy", "tone_name": "Joy"}
          ], 
        "secondary": [
          {"score": 0.647986, "tone_id": "tentative", "tone_name": "Tentative"}, 
          {"score": 0.550576, "tone_id": "analytical", "tone_name": "Analytical"}
          ]
        }
      const result = cleanSentencesTone(mockCleaned.sentences)
      expect(result).toEqual(expected)
    })
  })

  describe('withoutDupes', () => {
    it('should return the expected array of tones without duplicates', () => {
        const expected = [
          {"score": 0.897416, "tone_id": "analytical", "tone_name": "Analytical"}, 
          {"score": 0.580387, "tone_id": "joy", "tone_name": "Joy"}
        ]
      const result = withoutDupes(mockCleaned.sentences, 0)

      expect(result).toEqual(expected)  
    })
  })
})
import { mockResponse, mockCleaned } from '../../__mocks__/mockData.js'

export const toneFetch = text => {
  fetch(text)
  return mockResponse
}

export const toneExampleFetch = text => {
  fetch(text)
  return mockResponse
}

export const cleanTones = () => {
  return mockCleaned
}
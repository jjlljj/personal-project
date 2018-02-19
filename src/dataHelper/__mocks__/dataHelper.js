import { mockResponse } from '../../__mocks__/mockData.js'

export const toneFetch = text => {
  fetch(text)
  return mockResponse
}

export const mockFetch = text => {
  fetch(text)
  return mockResponse
}
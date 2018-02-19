import React from 'react'
import { shallow } from 'enzyme'
import { AnalyzerInput } from './AnalyzerInput'
import { mockText, mockResponse } from '../../__mocks__/mockData'

jest.mock('../../dataHelper/dataHelper')

describe('AnalyzerInput', () => {
  let mockAddResult 
  let renderedComponent

  beforeEach(() => {
    window.fetch = jest.fn()
    mockAddResult = jest.fn()
    renderedComponent = shallow(<AnalyzerInput addResult={ mockAddResult }/>)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot
  })

  it('should have a default text state of an empty string', () => {
    expect(renderedComponent.state('text')).toEqual("")
  })

  it('handleChange should set state with the correct params', () => {
    const mockEvent = { target: { value: 'I am new state' }}
    const expected = 'I am new state'

    expect(renderedComponent.state('text')).toEqual("")

    renderedComponent.instance().handleChange(mockEvent)

    expect(renderedComponent.state('text')).toEqual(expected)
  })

  it('handleSubmit should call the toneFetch with the expected params', () => {
    const mockSubmitEvent = { preventDefault: jest.fn() }
    renderedComponent.setState({text: mockText})
    renderedComponent.instance().handleSubmit(mockSubmitEvent)

    expect(window.fetch).toHaveBeenCalledWith(mockText)
  })

  it('handleSubmit should call the action addResults with the expected params', async () => {
    const mockSubmitEvent = { preventDefault: jest.fn() }
    
    expect(mockAddResult).not.toHaveBeenCalled()

    renderedComponent.setState({text: mockText})
    renderedComponent.instance().handleSubmit(mockSubmitEvent)

    expect(await mockAddResult).toHaveBeenCalledWith(mockResponse)
    
  })
})
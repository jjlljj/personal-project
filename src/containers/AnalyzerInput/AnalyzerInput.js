import React, { Component } from 'react'
import { connect } from 'react-redux'
import './AnalyzerInput.css'
import { toneFetch, mockFetch, cleanTones } from '../../dataHelper/dataHelper'
import { addResult } from '../../actions/index'

export class AnalyzerInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({ text: value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    
    const result = await mockFetch(this.state.text)
    cleanTones(result)

    this.props.addResult(result)
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit} >
        <input 
          type="text"
          name="text"
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Enter text here" />
        <button>Submit</button>
      </form>
    ) 
  }
}

const mapDispatchToProps = (dispatch) => ({
  addResult: result => dispatch(addResult(result))
})


export default connect(null, mapDispatchToProps)(AnalyzerInput)
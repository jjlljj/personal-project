import React, { Component } from 'react'
import { connect } from 'react-redux'
import './AnalyzerInput.css'
import { mockFetch } from '../../dataHelper/dataHelper'
import { addResult } from '../../actions/index'

export class AnalyzerInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  hangleChange = (event) => {
    const { value } = event.target
    this.setState({ text: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //here is where i would do a fetch....
    const result = mockFetch()
    //here is where i will clean
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
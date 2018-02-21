import React, { Component } from 'react'
import { connect } from 'react-redux'
import './AnalyzerInput.css'
import { toneFetch, mockFetch, cleanTones } from '../../dataHelper/dataHelper'
import { addResult, addDocumentTone, addSentences } from '../../actions/index'

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
    
    const results = await mockFetch(this.state.text)
    const { sentences, documentTone } = cleanTones(results)

    this.props.addResult({ sentences, documentTone })
    this.props.addSentences(sentences)
    this.props.addDocumentTone(documentTone)
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
  addResult: result => dispatch(addResult(result)),
  addDocumentTone: documentTone => dispatch(addDocumentTone(documentTone)),
  addSentences: sentences => dispatch(addSentences(sentences))
})


export default connect(null, mapDispatchToProps)(AnalyzerInput)
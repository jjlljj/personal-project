import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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

  handleChange = event => {
    const { value } = event.target
    this.setState({ text: value })
  }

  handleSubmit = async event => {
    event.preventDefault()
    
    if( this.state.text.length > 50 ) {
      const results = await toneFetch(this.state.text)
      const { sentences, documentTone } = cleanTones(results)

      this.props.addResult({ sentences, documentTone })
      this.props.addSentences(sentences)
      this.props.addDocumentTone(documentTone)

      this.props.history.push('/analyzed')   
    }
  }

  handleRandom = async event => {

    const results = await mockFetch(this.state.text)
    const { sentences, documentTone } = cleanTones(results)

    this.props.addResult({ sentences, documentTone })
    this.props.addSentences(sentences)
    this.props.addDocumentTone(documentTone)

    this.props.history.push('/analyzed')    
  }

  render() {
    return (
      <div>
        <form
          className="analyzer-form"
          onSubmit={this.handleSubmit} >
          <div className="btn-wrap">
            <button
              type="button" 
              className="get-example"
              onClick={this.handleRandom}
            >Example</button>
            <button 
              type="submit" 
              className="submit"
              >Submit</button>
          </div>
          <textarea 
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Enter text here" />
        </form>
      </div>
    ) 
  }
}

const mapDispatchToProps = (dispatch) => ({
  addResult: result => dispatch(addResult(result)),
  addDocumentTone: documentTone => dispatch(addDocumentTone(documentTone)),
  addSentences: sentences => dispatch(addSentences(sentences))
})


export default withRouter(connect(null, mapDispatchToProps)(AnalyzerInput))
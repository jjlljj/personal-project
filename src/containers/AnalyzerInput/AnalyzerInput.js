import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { func, object } from 'prop-types'
import './AnalyzerInput.css'
import { toneFetch, toneExampleFetch, 
  cleanTones } from '../../dataHelper/dataHelper'
import { addResult, addDocumentTone, 
  addSentencesTone, addSentences } from '../../actions/index'
import Alert from '../../components/Alert/Alert'
import { actions as alertActions } from 'react-redux-alerts'
import { bindActionCreators } from 'redux';

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
    
    if ( this.state.text.length > 50 ) {
      try {
        const results = await toneFetch(this.state.text)
        
        this.handleResults(results)     
      } catch (error) {
        this.props.alerts.createAlert('Alert', 'Unable to analyze text')
      }
    } else {
      
      this.props.alerts.createAlert('Alert', 'Text too short for analysis')
    }
  }

  handleRandom = async event => {
    event.preventDefault()

    try {
      const results = await toneExampleFetch(this.state.text)    
      this.handleResults(results)     
    } catch (error) {
      this.props.alerts.createAlert('Alert', 'Unable to get an analyzed example')
    }
  }

  handleResults = results => {
    const { sentences, sentencesTone, documentTone } = cleanTones(results)
    const { addResult, addSentences, addDocumentTone, 
      addSentencesTone, history } = this.props

    addResult({ sentences, sentencesTone, documentTone })
    addSentences(sentences)
    addDocumentTone(documentTone)
    addSentencesTone(sentencesTone)

    history.push('/results')
  }

  render() {
    return (
      <div className="analyzer-input-wrap">
        <form
          className="analyzer-form"
          onSubmit={this.handleSubmit} >
          <div className="btn-wrap">
            <button 
              type="submit" 
              className="submit"
            >Analyze</button>
            <button
              type="button" 
              className="get-example"
              onClick={this.handleRandom}
            >Show Example</button>
          </div>
          <Alert />
          <textarea 
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Enter text to analyze" />
        </form>
      </div>
    ) 
  }
}

AnalyzerInput.propTypes = {
  addResult: func,
  addDocumentTone: func,
  addSentences: func,
  addSentencesTone: func,
  history: object
}

const mapDispatchToProps = (dispatch) => ({
  addResult: result => dispatch(addResult(result)),
  addDocumentTone: documentTone => dispatch(addDocumentTone(documentTone)),
  addSentencesTone: sentencesTone => dispatch(addSentencesTone(sentencesTone)),
  addSentences: sentences => dispatch(addSentences(sentences)),
  alerts: bindActionCreators(alertActions, dispatch)
})


export default withRouter(connect(null, mapDispatchToProps)(AnalyzerInput))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actions as alertActions } from 'react-redux-alerts'
import { toneExampleFetch, 
  cleanTones } from '../../dataHelper/dataHelper' 
import { func, object } from 'prop-types'
import { addResult, addDocumentTone, 
addSentencesTone, addSentences } from '../../actions/index'
import './Example.css'
import Alert from '../../components/Alert/Alert'
import DocumentToneDisplay from '../DocumentToneDisplay/DocumentToneDisplay' //eslint-disable-line
import SentencesToneDisplay from '../SentencesToneDisplay/SentencesToneDisplay' //eslint-disable-line

export class Example extends Component {

  componentDidMount = () => {
    this.handleExample()
  }

  handleExample = async() => {
    try {
      const results = await toneExampleFetch()    
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
  }

  render() {
    const { documentTone, sentences } = this.props

    return (
      <div>
        <Alert />
        {
          documentTone[0] &&
          <DocumentToneDisplay />
        }
        {
          sentences[0] &&
          <SentencesToneDisplay />     
        }
      </div>
    )
  }
}

Example.propTypes = {
  addResult: func,
  addDocumentTone: func,
  addSentences: func,
  addSentencesTone: func,
  history: object
}

const mapStateToProps = ({ documentTone, sentences }) => ({
  documentTone,
  sentences
})

const mapDispatchToProps = (dispatch) => ({
  addResult: result => dispatch(addResult(result)),
  addDocumentTone: documentTone => dispatch(addDocumentTone(documentTone)),
  addSentencesTone: sentencesTone => dispatch(addSentencesTone(sentencesTone)),
  addSentences: sentences => dispatch(addSentences(sentences)),
  alerts: bindActionCreators(alertActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Example)
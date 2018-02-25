import React from 'react'
import { connect } from 'react-redux'
import './DisplayResults.css'
import DocumentToneDisplay from '../DocumentToneDisplay/DocumentToneDisplay'
import SentencesToneDisplay from '../SentencesToneDisplay/SentencesToneDisplay'


export const DisplayResults = (props) => {

  return (
    <div>
      <DocumentToneDisplay />
      <SentencesToneDisplay /> 
     
    </div>
  )
}

const mapStateToProps = state => ({
  sentences: state.sentences
})

export default connect(mapStateToProps)(DisplayResults)

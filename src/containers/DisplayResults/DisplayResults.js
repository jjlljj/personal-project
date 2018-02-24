import React from 'react'
import { connect } from 'react-redux'
import './DisplayResults.css'
import DocumentToneDisplay from '../DocumentToneDisplay/DocumentToneDisplay'

export const DisplayResults = (props) => {
  const { sentences } = props
  
  const renderText = sentences.map(sentence => {
    const classList = sentence.tones[0].tone_id || ""

    return(
      <span className={ classList }> {sentence.text}</span>
    )
  })

  return (
    <div>
      <DocumentToneDisplay />

      <h3>Analyzed: </h3>
      <p>
        { renderText }
      </p> 
    </div>
  )
}

const mapStateToProps = state => ({
  sentences: state.sentences
})

export default connect(mapStateToProps)(DisplayResults)

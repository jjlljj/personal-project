import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './SentencesToneDisplay.css'

export const SentencesToneDisplay = (props) => {
  const { sentences } = props
  
  const renderText = sentences.map(sentence => {
    const classList = sentence.tones[0].tone_id || ""

    return(
      <span className={ classList }> {sentence.text}</span>
    )
  })


  return (
    <div>
      <h2>Sentence Level Tones</h2>
      <p>
        { renderText }
      </p> 
    </div>
  )
}

const mapStateToProps = ({ sentences }) => ({
  sentences
})

export default withRouter(connect(mapStateToProps)(SentencesToneDisplay))
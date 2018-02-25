import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { arrayOf, shape, number, string } from 'prop-types'
import './SentencesToneDisplay.css'

export const SentencesToneDisplay = (props) => {
  const { sentences } = props
  
  const renderText = sentences.map(sentence => {
    const classList = sentence.tones[0].tone_id || ""

    return(
      <span className={ classList } key={sentence.sentence_id}> {sentence.text}</span>
    )
  })

  const renderTones = sentences.map(sentence => {
    const classList = (sentence.tones[0].tone_id + " tone-category") || ""

    return sentence.tones[0] && (
        <li 
          className="sentence-tone-item"
          key={sentence.tones[0].tone_id + sentence.sentence_id}>
          <span className={classList}>{sentence.tones[0].tone_name}: </span> Quis autem vel eum iure reprehenderit qui in ea voluptate velit
        </li>
    ) || ""
  })

  return (
    <div className="sentences-tone">
      <h2>Sentence Level Tones</h2>
      <div className="sentences-wrap"> 
        <div className="sentences">
          <p>
            { renderText }
          </p> 
        </div>
        <div className="tones-list">
          <ul>
            { renderTones }
          </ul>
        </div>
      </div>
    </div>
  )
}

SentencesToneDisplay.propTypes = {
  senteces: arrayOf(shape({
    sentence_id: number,
    text: string,
    tones: arrayOf(shape({
      score: number,
      tone_id: string,
      tone_name: string
    }))
  }))
}

const mapStateToProps = ({ sentences }) => ({
  sentences
})

export default withRouter(connect(mapStateToProps)(SentencesToneDisplay))
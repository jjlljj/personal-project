import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { arrayOf, shape, number, string } from 'prop-types'
import './SentencesToneDisplay.css'

export const SentencesToneDisplay = (props) => {
  const { sentences, sentencesTone } = props
  
  const renderText = sentences.map(sentence => {
    const classList = sentence.tones[0] && sentence.tones[0].tone_id || ""

    return (
      <span 
        className={ classList } 
        key={sentence.sentence_id}> {sentence.text}
      </span>
    )
  })

  const renderTones = sentencesTone.primary &&
    sentencesTone.primary.map(tone => {
      const classList = (tone + " tone-category")

      return (
        <li 
          className="sentence-tone-item"
          key={tone}>
          <span className={classList}>
            {tone}: </span> 
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit
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
            { renderTones 
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

SentencesToneDisplay.propTypes = {
  sentences: arrayOf(shape({
    sentence_id: number,  //eslint-disable-line
    text: string,
    tones: arrayOf(shape({
      score: number,
      tone_id: string,  //eslint-disable-line
      tone_name: string //eslint-disable-line
    }))
  })),
  sentencesTone: shape({
    primary: arrayOf(string),
    secondary: arrayOf(string)
  })
}

const mapStateToProps = ({ sentences, sentencesTone }) => ({
  sentences,
  sentencesTone
})

export default withRouter(connect(mapStateToProps)(SentencesToneDisplay))
import React from 'react'
import { connect } from 'react-redux'
import './DisplayResults.css'

export const DisplayResults = (props) => {
  let { results } = props

  const renderText = results[0] && results[0].sentences_tone.map(sentence => {

    const classList = sentence.tones.reduce( (acc, tone) => { 

      return acc + tone.tone_id + " "
    }, "") || ""

    return(
      <span className={ classList }> {sentence.text}</span>
    )
  })

  return (
    <div>
      <h3>Analyzed: </h3>
      <p>
        { renderText }
      </p> 
    </div>
  )
}

const mapStateToProps = state => ({
  results: state.results
})

export default connect(mapStateToProps)(DisplayResults)
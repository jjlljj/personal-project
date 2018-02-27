import React from 'react'
import './SentenceView.css'
import { connect } from 'react-redux'
import ToneCard from '../ToneCard/ToneCard'
import { sentencesTonesRef } from '../../data/tonesData'

export const SentenceView = ({ sentences, sentence_id }) => {

  const prevSentence = sentences[sentence_id-1] && (<span>{sentences[sentence_id - 1].text}</span>) || ''
  const selectedSentence = (<span className="highlight">{sentences[sentence_id].text}</span>)
  const followingSentence = sentences[sentence_id + 1] && (<span>{sentences[sentence_id+1].text}</span>) || ''

  const renderedSentences = (
    <p>{prevSentence} {selectedSentence} {followingSentence}</p>
  )


  const renderedCards = sentences[sentence_id].tones && sentences[sentence_id].tones.map(tone => {
    return  (
       <ToneCard {...tone} description={sentencesTonesRef[tone.tone_name].description} key={tone.tone_name+'card'}/>
    )
  })
  return (
    <div className="sentence-view">
      <div className="sentence-wrap">
        { 
          renderedSentences
         }
      </div>
      <div className="cards-wrap">
        {
          renderedCards
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({ sentences }) => ({
  sentences
})

export default connect(mapStateToProps)(SentenceView)
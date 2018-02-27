import React from 'react'
import './SentenceView.css'
import { connect } from 'react-redux'
import ToneCard from '../ToneCard/ToneCard'


export const SentenceView = ({ sentences, sentence_id }) => {

  const renderSentences = ""
  console.log(sentences)

  const renderCards = sentences[sentence_id].tones && sentences[sentence_id].tones.map(tone => {
    return  (
       <ToneCard {...tone} key={tone.tone_name+'card'}/>
    )
  })
  return (
    <div className="sentence-view">
      <div className="sentence-wrap">
        { //renderSentences
         }
      </div>
      <div className="cards-wrap">
        {
          renderCards
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({ sentences }) => ({
  sentences
})

export default connect(mapStateToProps)(SentenceView)
import React from 'react'
import './ToneCard.css'

export const ToneCard = ({ tone_name, description, score = "" }) => {

  return (
    <div>
      <h3>{tone_name}</h3>
      <p>{description}</p>
      I am tonecard
    </div>
  )
}

export default ToneCard
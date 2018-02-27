import React from 'react'
import './Tones.css'
import { tonesList } from '../../data/tonesData'
import ToneCard from  '../ToneCard/ToneCard'

export const Tones = () => {
  const renderedCards = tonesList.map(tone => {
    return (
      <ToneCard {...tone} key={tone+'card'}/>
    )
  })
  
  return (
    <div className="tones-section">
      <div className="tones-wrapper">
        { renderedCards }
      </div>
    </div>
  )
}

export default Tones
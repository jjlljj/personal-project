import React from 'react'
import './Tones.css'
import { tonesList } from '../../data/tonesData'
import ToneCard from  '../ToneCard/ToneCard'

export const Tones = () => {
  const renderedCards = tonesList.map(tone => {
    return (
      <ToneCard {...tone} />
    )
  })
  
  return (
    <div>
    I am Tones
      { renderedCards }
    </div>
  )
}

export default Tones
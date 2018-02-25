import React from 'react'
import './DisplayResults.css'
import DocumentToneDisplay from '../DocumentToneDisplay/DocumentToneDisplay'
import SentencesToneDisplay from '../SentencesToneDisplay/SentencesToneDisplay'

export const DisplayResults = () => {

  return (
    <div>
      <DocumentToneDisplay />
      <SentencesToneDisplay />     
    </div>
  )
}

export default DisplayResults

import React from 'react'
import './DisplayResults.css'
import DocumentToneDisplay from '../../containers/DocumentToneDisplay/DocumentToneDisplay'
import SentencesToneDisplay from '../../containers/SentencesToneDisplay/SentencesToneDisplay'

export const DisplayResults = () => {

  return (
    <div>
      <DocumentToneDisplay />
      <SentencesToneDisplay />     
    </div>
  )
}

export default DisplayResults

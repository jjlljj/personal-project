import React from 'react'
import './DisplayResults.css'
import DocumentToneDisplay from '../../containers/DocumentToneDisplay/DocumentToneDisplay' //eslint-disable-line
import SentencesToneDisplay from '../../containers/SentencesToneDisplay/SentencesToneDisplay' //eslint-disable-line

export const DisplayResults = () => {

  return (
    <div>
      <DocumentToneDisplay />
      <SentencesToneDisplay />     
    </div>
  )
}

export default DisplayResults

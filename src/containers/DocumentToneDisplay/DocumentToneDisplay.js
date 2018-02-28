/* eslint-disable max-len */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { arrayOf, shape, number, string } from 'prop-types'
import { cleanWebChartData } from '../../dataHelper/dataHelper'
import './DocumentToneDisplay.css'
import ToneWeb from '../ToneWeb/ToneWeb'
import { documentTonesRef } from '../../data/tonesData'

export const DocumentToneDisplay = (props) => {
  const { documentTone } = props
  const chartData = cleanWebChartData(documentTone)

  const renderToneList = () => {
    return documentTone.length > 2 && (
      <div className="tone-list">
        <h3>Primary:  {documentTone[0].tone_name}</h3>
        <p>{ documentTonesRef[documentTone[0].tone_id].description }</p> 
        <h3>Secondary:  {documentTone[1].tone_name}</h3>
        <p>{ documentTonesRef[documentTone[1].tone_id].description }</p>
        <h3>Tertiary:  {documentTone[2].tone_name}</h3>
        <p>{ documentTonesRef[documentTone[2].tone_id].description }</p>
      </div>
    ) || (<p>Unable to perform document level analysis</p>)
  }
  
  return (
    <div className="document-tone">

      <h2>Document Level Tones</h2>

      <div className="analysis-wrap">
    
        <ToneWeb chartData={ [chartData] } />
        
        { renderToneList() }

      </div>

    </div>
  )
}

DocumentToneDisplay.propTypes = {
  documentTone: arrayOf(shape({
    score: number,
    tone_id: string,    //eslint-disable-line
    tone_name: string   //eslint-disable-line
  }))
}

const mapStateToProps = ({ documentTone }) => ({
  documentTone
})

export default withRouter(connect(mapStateToProps)(DocumentToneDisplay))

import React from 'react'
import { connect } from 'react-redux'
import RadarChart from '../../chartHelper/chartHelper'
import './ToneWeb.css'


export const ToneWeb = (props) => {
  const { documentTones } = props

  console.log(documentTones)

  return (
    <div className="tone-web">
      <div className="tone-web-chart"></div>
      {// RadarChart.draw("tone-web-chart")
      }
    </div>
  )
}

const mapStateToProps = ({ documentTones }) => ({
  documentTones
})

export default connect(mapStateToProps)(ToneWeb)


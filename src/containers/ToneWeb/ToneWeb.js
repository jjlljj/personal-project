import React from 'react'
import { connect } from 'react-redux'
import RadarChart from '../../chartHelper/chartHelper'
import * as d3 from 'd3'
import './ToneWeb.css'


export const ToneWeb = (props) => {
  const { documentTone } = props

  const chartTones = documentTone.map(tone => {
    return {
      axis: tone.tone_name,
      value: tone.score
    }
  })

  console.log(chartTones)
  const data = [
    {
      className:'charted-tones',
      axes: chartTones
    }
  ]
  const chartIt = () => {
    let chart = RadarChart.chart();
    let cfg = chart.config(); // retrieve default config
    let svg = d3.select('.tone-web-chart').append('svg')
            .attr('width', 300)
            .attr('height', 300);
          svg.append('g').classed('single', 1).datum(data).call(chart);

  }

  return (
    <div className="tone-web">
      <div className="tone-web-chart"></div>
      {
        //chartIt()
      }
    {
        RadarChart.draw(".tone-web-chart", data) 
    }{
      console.log(RadarChart)
    }
    </div>
  )
}

const mapStateToProps = ({ documentTone }) => ({
  documentTone
})

export default connect(mapStateToProps)(ToneWeb)


import React, { Component } from 'react'
import { connect } from 'react-redux'
import RadarChart from '../../chartHelper/chartHelper'
import * as d3 from 'd3'
import { select } from 'd3-selection'
import './ToneWeb.css'


export class ToneWeb extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.createToneWeb()
  }

  formatData = () => {
    const { documentTone } = this.props
    const chartTones = documentTone.map(tone => {
      return {
        axis: tone.tone_name,
        value: tone.score
      }
    })

    return [ chartTones ]
  }
  
  createToneWeb = () => {
    const node = this.node
    const axisGrid = this.axisGrid
    const color = d3.scaleOrdinal()
        .range(["#EDC951","#CC333F","#00A0B0"]);
    const chartOptions = {
        w: 200,
        h: 200,
        margin: {
          top: 20, 
          right: 20, 
          bottom: 20, 
          left: 20
        },
        maxValue: 1,
        levels: 4,
        roundStrokes: true,
      };

    RadarChart(node, this.formatData(), chartOptions)
  }

  render() {
    return (
      <div className="tone-web">
        <svg ref={node => this.node = node}></svg>
      </div>
    )
  }
  
}

const mapStateToProps = ({ documentTone }) => ({
  documentTone
})

export default connect(mapStateToProps)(ToneWeb)


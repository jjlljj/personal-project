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

    RadarChart(node, this.formatData())
  }

  render() {
    return (
      <div className="tone-web">
        <svg ref={node => this.node = node} width={400} height={400}></svg>
      </div>
    )
  }
  
}

const mapStateToProps = ({ documentTone }) => ({
  documentTone
})

export default connect(mapStateToProps)(ToneWeb)


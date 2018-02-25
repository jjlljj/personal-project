import React, { Component } from 'react'
import AnalyzerInput from '../AnalyzerInput/AnalyzerInput'
import './Main.css'

export class Main extends Component {

  render() {
    return (
      <div className="main">
        <AnalyzerInput />
      </div>
    )
  }
}

export default Main
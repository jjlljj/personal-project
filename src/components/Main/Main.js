import React from 'react'
import './Main.css'
import AnalyzerInput from '../../containers/AnalyzerInput/AnalyzerInput'
import About from '../About/About'


export const Main = () => {

  return (
    <div className="main">
      <About />
      <AnalyzerInput />
    </div>
  )
}

export default Main
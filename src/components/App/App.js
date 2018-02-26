import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
import DisplayResults from '../DisplayResults/DisplayResults'
import AnalyzerInput from '../../containers/AnalyzerInput/AnalyzerInput'
import Nav from '../Nav/Nav'
import About from '../About/About'

export const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Main} />
      <Route exact path="/results" component={DisplayResults} />
      <Route exact path="/analyze" component={Main} />
      <Route expact path="/about" component={About} />
    </div>
  )
}

export default App
import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import DisplayResults from '../DisplayResults/DisplayResults'
import AnalyzerInput from '../../containers/AnalyzerInput/AnalyzerInput'
import Nav from '../Nav/Nav'
import About from '../About/About'
import Example from '../../containers/Example/Example'


export const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route exact path="/" component={About} />
      <Route exact path="/results" component={DisplayResults} />
      <Route exact path="/analyze" component={AnalyzerInput} />
      <Route exact path="/example" component={Example} />
     
    </div>
  )
}

//  <Route exact path="/tones" component={Tones} />

export default App
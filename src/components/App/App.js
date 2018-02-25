import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Main from '../../containers/Main/Main'
import DisplayResults from '../../containers/DisplayResults/DisplayResults'
import Nav from '../Nav/Nav'

export const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Main} />
      <Route expact path="/analyzed" component={DisplayResults} />
    </div>
  )
}

export default App

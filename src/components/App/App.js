import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import './App.css'
import Main from '../../containers/Main/Main'
import Nav from '../Nav/Nav'

export const App = () => {

  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Main} />
    </div>
  )
}

export default App;

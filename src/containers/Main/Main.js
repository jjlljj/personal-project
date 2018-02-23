import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnalyzerInput from '../AnalyzerInput/AnalyzerInput'
import DisplayResults from '../DisplayResults/DisplayResults'
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
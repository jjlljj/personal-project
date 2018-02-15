import React, { Component } from 'react'
import { connect } from 'react-redux'
import {apiUsername, apiPassword} from '../../api/api'
import './Main.css'
import {mockFetch} from '../../dataHelper/dataHelper'

export class Main extends Component {

  async componentDidMount() {

    const results = await mockFetch()

    console.log(results)
  } 

  render() {
    return (
      <div>
        I am main
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
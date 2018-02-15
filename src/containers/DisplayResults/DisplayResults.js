import React from 'react'
import { connect } from 'react-redux'
import './DisplayResults.css'

export const DisplayResults = () => {

  return (
    <div>
      { this.props &&
        console.log(this.props.results[0])}
      I am results
    </div>
  )
}

const mapStateToProps = state => ({
  results: state.results
})

export default connect(mapStateToProps)(DisplayResults)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ToneWeb.css'

export class ToneWeb extends Component {

  


  render() {
    const { documentTones } = this.props
      
    return (
      <div>
        I am toneweb
      </div>
    )
  }
}

const mapStateToProps = ({ documentTones }) => ({
  documentTones
})

export default connect(mapStateToProps)(ToneWeb)


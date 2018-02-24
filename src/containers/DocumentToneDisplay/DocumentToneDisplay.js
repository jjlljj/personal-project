import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './DocumentToneDisplay.css'
import ToneWeb from '../ToneWeb/ToneWeb'

export const DocumentToneDisplay = (props) => {
  const { documentTone } = props
  
  return (
    <div className="document-tone">

      <ToneWeb />


      <div className="analysis-wrap">
        <h2>Document Tones</h2>
        <h3>Primary:  {documentTone[0].tone_name}</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <h3>Secondary:  {documentTone[1].tone_name}</h3>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora</p>
        <h3>Tertiary:  {documentTone[2].tone_name}</h3>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
      </div>

    </div>
  )
}

const mapStateToProps = ({ documentTone }) => ({
  documentTone
})

export default connect(mapStateToProps)(DocumentToneDisplay)

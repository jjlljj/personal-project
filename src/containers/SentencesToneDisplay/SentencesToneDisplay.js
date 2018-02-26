import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { arrayOf, shape, number, string } from 'prop-types'
import './SentencesToneDisplay.css'

export class SentencesToneDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sentencesView: "primary",
      primary: 'active',
      secondary: ''
    }
  }
  
  renderText = () => {
    const { sentences } = this.props

    return sentences.map(sentence => {
    const classList = sentence.tones[0] && sentence.tones[0].tone_id || ""

      return (
        <span className={ classList } key={sentence.sentence_id}> 
          {sentence.text}
        </span>
      )
    })
  }

  renderTones = () => {
    const { sentencesTone } = this.props
    const { sentencesView } = this.state

    return sentencesTone[sentencesView] &&
    sentencesTone[sentencesView].map(tone => {
      const classList = (tone + " tone-category")

      return (
        <li className="sentence-tone-item"
          key={tone}>
          <span className={classList}>
            {tone}: </span> 
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit
        </li>
      ) || ""
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    const { name } = event.target
    
    this.setState({ sentencesView: event.target.name, primary: "", secondary: "" }, () => {
      this.setState({[name]: 'active'})
    })
  }

  render() {
    return (
      <div className="sentences-tone">
        <h2>Sentence Level Tones</h2>
        <div className="sentences-wrap"> 
          <div className="sentences">
            <p>
              { this.renderText() }
            </p> 
          </div>
          <div className="tones-list">
            <button
              name="primary"
              className={this.state.primary}
              onClick={this.handleClick} >Primary</button>
            <button
              name="secondary"
              className={this.state.secondary}
              onClick={this.handleClick} >Secondary</button>
            <ul>
              { this.renderTones() 
              }
            </ul>
          </div>
        </div>
      </div>
    )   
  }
}

SentencesToneDisplay.propTypes = {
  sentences: arrayOf(shape({
    sentence_id: number,  //eslint-disable-line
    text: string,
    tones: arrayOf(shape({
      score: number,
      tone_id: string,  //eslint-disable-line
      tone_name: string //eslint-disable-line
    }))
  })),
  sentencesTone: shape({
    primary: arrayOf(string),
    secondary: arrayOf(string)
  })
}

const mapStateToProps = ({ sentences, sentencesTone }) => ({
  sentences,
  sentencesTone
})

export default withRouter(connect(mapStateToProps)(SentencesToneDisplay))
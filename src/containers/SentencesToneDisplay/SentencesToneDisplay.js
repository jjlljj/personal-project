import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { arrayOf, shape, number, string } from 'prop-types'
import './SentencesToneDisplay.css'
import { sentencesTonesRef } from '../../data/tonesData'

export class SentencesToneDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sentencesView: "primary",
      primary: 'active',
      secondary: '',
      toneIndex: 0
    }
  }
  
  renderText = () => {
    const { sentences } = this.props
    const { toneIndex } = this.state

    return sentences.map(sentence => {
      let classList = sentence.tones[toneIndex] && 
        sentence.tones[toneIndex].tone_id || ""

      return (
        <Link 
          key={sentence.sentence_id}
          to={`/sentence/${sentence.sentence_id}`}>
          <span className={ classList } > {sentence.text}</span>
        </Link>
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
          { sentencesTonesRef[tone].description }
        </li>
      ) || ""
    })
  }

  handleToggle = (event) => {
    event.preventDefault()
    const { name } = event.target
    const toneIndex = name === "primary" ? 0 : 1
    
    this.setState({ 
      sentencesView: event.target.name, 
      primary: "", 
      secondary: "", 
      toneIndex 
    }, () => { 
      this.setState({[name]: 'active' })
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
              onClick={this.handleToggle} >Primary</button>
            <button
              name="secondary"
              className={this.state.secondary}
              onClick={this.handleToggle} >Secondary</button>
            <ul>
              { this.renderTones() }
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {apiUsername, apiPassword} from 
import './Main.css'

export class Main extends Component {

  async componentDidMount() {
   

    console.log('resolved')
  }

  apiFetch = async () => {
    const url = "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${apiUsername}:${apiPassword}`
        "Content-Type": "application/json"
      }

    })
    const resolved = await response.json()
  } 

  render() {
    return (
      <div>
        I am main
      </div>
    )
  }
}

export default Main
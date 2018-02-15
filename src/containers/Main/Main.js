import React, { Component } from 'react'
import { connect } from 'react-redux'
import {apiUsername, apiPassword} from '../../api/apiKey'
import './Main.css'

export class Main extends Component {

  async componentDidMount() {
    //const fetchy = await this.apiFetch()

   //console.log(fetchy)
  }

  apiFetch = async () => {
    const text = "Let's see if this works, if not I will try something else"
    const version =  "2017-09-21"
    const url = "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone/"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${apiUsername}:${apiPassword}`

      },
      body: JSON.stringify({ text, version })
    })
    return await response.json()
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
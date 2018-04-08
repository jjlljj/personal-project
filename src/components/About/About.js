/* eslint-disable max-len */
import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

export const About = () => {

  return (
    <div className="about">
      <h2>{"Interpret, Don't Misinterpret"}</h2>

      <div className="btn-wrap"> 
        <Link to="/analyze">
          <button>Use the Tool</button>
        </Link>
        <Link to="/example">
          <button>See Example</button>
        </Link>
      </div>

      <div className="text-wrap"> 
        <p>We negotiate every day. Whether by email, chat, instant message, we are constantly navigating new spaces in which the meaning of our words matter. These can be quick and off the cuff, or they can allow time for reflection and careful choice of language.
        </p>
        <p>
          Yet often, these lack the cues of tone, intent and meaning that we pick up when we hear and see the party we are negotiating with. Using e-communication technologies we sometimes send unintended messages or misinterpret a message we receive. As a result, rather than reaching a resolution through the negotiation, the conflict escalates.
        </p>
        <p>
          Use this tool to check your language before sending a message, to get a better read on a received message or an exchange with others, so that you can check before acting on potentially incorrect assumptions and get things back on track.
        </p>
      </div>

    </div>
  )
}

export default About

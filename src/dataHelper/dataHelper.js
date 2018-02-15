import { apiUsername, apiPassword } from '../api/api'

export const apiFetch = async (text) => {
  
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

export const mockFetch = async (text) => {
  const sentances = "I am one sentance. I am another."
  const url = '/analyze'

  const response = await fetch( url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({text: sentances})
  })
  
  return await response.json()
}


const mockResults = {
  "sentences_tone": [
    {
      "sentence_id": 0,
      "text": "I was asked to sign a third party contract a week out from stay.",
      "tones": []
    },
    {
      "sentence_id": 1,
      "text": "If it wasn't an 8 person group that took a lot of wrangling I would have cancelled the booking straight away.",
      "tones": [
        {
          "score": 0.695927,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        }
      ]
    },
    {
      "sentence_id": 2,
      "text": "Bathrooms - there are no stand alone bathrooms.",
      "tones": []
    },
    {
      "sentence_id": 3,
      "text": "Please consider this - you have to clear out the main bedroom to use that bathroom.",
      "tones": [
        {
          "score": 0.711887,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        },
        {
          "score": 0.898327,
          "tone_id": "confident",
          "tone_name": "Confident"
        }
      ]
    },
    {
      "sentence_id": 4,
      "text": "Other option is you walk through a different bedroom to get to its en-suite.",
      "tones": []
    },
    {
      "sentence_id": 5,
      "text": "Signs all over the apartment - there are signs everywhere - some helpful - some telling you rules.",
      "tones": [
        {
          "score": 0.555144,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        },
        {
          "score": 0.647986,
          "tone_id": "tentative",
          "tone_name": "Tentative"
        }
      ]
    },
    {
      "sentence_id": 6,
      "text": "Perhaps some people like this but It negatively affected our enjoyment of the accommodation.",
      "tones": [
        {
          "score": 0.955608,
          "tone_id": "tentative",
          "tone_name": "Tentative"
        }
      ]
    },
    {
      "sentence_id": 7,
      "text": "Stairs - lots of them - some had slightly bending wood which caused a minor injury.",
      "tones": [
        {
          "score": 0.560098,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        },
        {
          "score": 0.91961,
          "tone_id": "tentative",
          "tone_name": "Tentative"
        }
      ]
    }
  ]
}
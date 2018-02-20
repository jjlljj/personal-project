export const toneFetch = async (text) => {
  try {
    const url = '/analyze'

    const response = await fetch( url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({text: text})
    })

    if (response.status <= 200){
      return await response.json()
    } else {
      throw new Error("Unable to get text's tone")
    }
  } 
  catch(err) {
    throw(err)
  }  
}

export const mockFetch = async (text) => {
  try {
    console.log(text)
    const url = '/mockAnalyze'

    const response = await fetch( url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({text: text})
    })
    
    if (response.status <= 200){  
      return await response.json()
      } else {
        throw new Error("Unable to fetch mock data")
    }
  } 
  catch(err) {
    throw(err)
  }  
}

export const cleanTones = response => {
  const documentTones = cleanDocumentTone(response)
  const sentences = cleanSentenceTones(response)
}

export const cleanDocumentTone = ({ document_tone }) => {
  const toneThreshold = 0.2
  const tones = [ 
    ...document_tone.tone_categories[0].tones, 
    ...document_tone.tone_categories[1].tones 
  ]

  return tones
    .filter(tone => tone.score >= toneThreshold)
    .sort((a, b) => b.score - a.score)
}

export const cleanSentenceTones = sentences => {

}

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

export const toneExampleFetch = async (text) => {
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

// WHAT TO DO WITH SOCIAL TONE BIG5 TONES...
// currently not pulling them in, but they are there to be used

export const cleanTones = response => {
  const documentTone = cleanDocumentTone(response)
  const sentences = cleanSentences(response)
  const sentencesTone = cleanSentencesTone(sentences)
  
  return { documentTone, sentencesTone, sentences }
}

export const cleanDocumentTone = ({ document_tone }) => {
  const toneThreshold = 0.3
  return cleanTone(document_tone, toneThreshold)
}

export const cleanSentences = ({ sentences_tone }) => {
  const toneThreshold = 0.2
  return sentences_tone.map(sentence => {
    let tones = cleanTone(sentence, toneThreshold)

    return { 
      sentence_id: sentence.sentence_id,
      text: sentence.text,
      tones  
    }
  })
}

export const cleanTone = ( data, thresh ) => {
  const tones = cleanToneCategories(data.tone_categories)
  return filterAndSort(tones, thresh)
}

export const cleanToneCategories = categories => {
  return [
    ...categories[0].tones,
    ...categories[1].tones
  ]
}

export const filterAndSort = (tones, thresh = 0) => {
  return tones
    .filter(tone => tone.score >= thresh)
    .sort((a, b) => b.score - a.score) 
}

export const cleanWebChartData = ( data ) => { 
  const chartTones = data.map(tone => {
    return {
      axis: tone.tone_name,   //eslint-disable-line
      value: tone.score
    }
  })

  return chartTones
}

export const cleanSentencesTone = sentences => {
  return {
    primary: withoutDupes(sentences, 0),
    secondary: withoutDupes(sentences, 1)
  }
}

export const withoutDupes = (array, idx) => {
  const tones = array.map(sentence => sentence.tones[idx] || null )
  return Array.from(new Set(tones))
}

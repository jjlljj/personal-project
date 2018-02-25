export const addResult = result => ({
  type: 'ADD_RESULT',
  result
})

export const addSentences = sentences => ({
  type: 'ADD_SENTENCES',
  sentences
})

export const clearSentences = () => ({
  type: 'CLEAR_SENTENCES'
})

export const addSentencesTone = sentencesTone => ({
  type: 'ADD_SENTENCES_TONE',
  sentencesTone
})

export const addDocumentTone = documentTone => ({
  type: 'ADD_DOCUMENT_TONE',
  documentTone
})

export const clearDocumentTone = () => ({
  type: 'CLEAR_DOCUMENT_TONE'
})
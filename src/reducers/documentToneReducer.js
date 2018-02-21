export const documentToneReducer = ( state=[], action ) => {
  switch(action.type) {
    case 'ADD_DOCUMENT_TONE':
      return action.documentTone
    case 'CLEAR_DOCUMENT_TONE':
      return []
    default:
      return state
  }
}
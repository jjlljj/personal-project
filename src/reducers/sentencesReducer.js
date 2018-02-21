export const sentencesReducer = ( state=[], action ) => {
  switch(action.type) {
    case 'ADD_SENTENCES':
      return action.sentences
    case 'CLEAR_SENTENCES':
      return []
    default:
      return state
  }
}
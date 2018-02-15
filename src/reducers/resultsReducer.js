export const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return [ action.result, ...state ]
    default:
      return state
  }
}
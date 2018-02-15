export const ResultsReducer = (state = [], action) => {
  switch (action.type) {
    case: 'ADD_RESULT':
      return [ action, ...state ]
  }
}
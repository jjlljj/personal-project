import { combineReducers } from 'redux'
import { resultsReducer } from './resultsReducer'
import { sentencesReducer } from './sentencesReducer'
import { documentToneReducer } from './documentToneReducer'
import { sentencesToneReducer } from './sentencesToneReducer'
 
const rootReducer = combineReducers({
  results: resultsReducer,
  sentences: sentencesReducer,
  documentTone: documentToneReducer,
  sentencesTone: sentencesToneReducer
});

export default rootReducer;
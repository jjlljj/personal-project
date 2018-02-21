import { combineReducers } from 'redux'
import { resultsReducer } from './resultsReducer'
import { sentencesReducer } from './sentencesReducer'
import { documentToneReducer } from './documentToneReducer'
 
const rootReducer = combineReducers({
  results: resultsReducer,
  sentences: sentencesReducer,
  documentTone: documentToneReducer
});

export default rootReducer;
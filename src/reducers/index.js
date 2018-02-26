import { combineReducers } from 'redux'
import { resultsReducer } from './resultsReducer'
import { sentencesReducer } from './sentencesReducer'
import { documentToneReducer } from './documentToneReducer'
import { sentencesToneReducer } from './sentencesToneReducer'
import { alertReducer } from 'react-redux-alerts'
 
const rootReducer = combineReducers({
  results: resultsReducer,
  sentences: sentencesReducer,
  documentTone: documentToneReducer,
  sentencesTone: sentencesToneReducer,
  alerts: alertReducer
});

export default rootReducer;
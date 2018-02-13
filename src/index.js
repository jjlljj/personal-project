import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index.js'
import logger from 'redux-logger'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const middleware = applyMiddleware(logger)

const store = createStore(rootReducer, devtools, middleware)

ReactDOM.render(
  <Provider store = { store } >
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'))

registerServiceWorker()
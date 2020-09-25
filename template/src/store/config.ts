import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import userReducer from './user/reducer'
import appReducer from './app/reducer'

const persistConfig = {
  key: 'root',
  keyPrefix: '',
  storage
}

/**
 * should be fixed by Redux.
 * https://github.com/reduxjs/redux/issues/2709
 */
const rootReducer: any = combineReducers({
  user: userReducer,
  app: appReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [thunk]

let composer
if (process.env.NODE_ENV === 'development') {
  /* eslint-disable global-require */
  const { composeWithDevTools } = require('redux-devtools-extension')
  const immutableStateInvariant = require('redux-immutable-state-invariant').default()
  /* eslint-enable global-require */

  composer = composeWithDevTools
  middleWares.push(immutableStateInvariant)
} else {
  composer = compose
}

const store = createStore(persistedReducer, composer(applyMiddleware(...middleWares)))

const persistor = persistStore(store)

export { store, persistor }

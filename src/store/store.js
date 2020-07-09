import createSagaMiddleware from 'redux-saga'
import {createStore,applyMiddleware} from 'redux'

import combineReducers from './modules/combineReducers'
import combineSagas from './modules/combineSagas'


const sagaMiddleware=createSagaMiddleware()
const enhancer=applyMiddleware(sagaMiddleware)

const store = createStore(combineReducers,enhancer)

sagaMiddleware.run(combineSagas)

export default store
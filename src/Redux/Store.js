import { applyMiddleware, compose, combineReducers, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { NavbarRedcuer } from './Reducer/NavbarRedcuer'
const rootReducer = combineReducers({
    NavbarRedcuer
})
const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middleware))
export const Store = legacy_createStore(rootReducer, enhancer)


import { combineReducers, createStore, applyMiddleware } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import 'rxjs'

const reducer = combineReducers({
  index: require('./containers/index/reducer').default,
})

const epics = combineEpics(
  require('./containers/index/epics').default,
)

const epicMiddleware = createEpicMiddleware(epics)

const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware),
)

export default store
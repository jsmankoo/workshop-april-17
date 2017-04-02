import { fromJS } from 'immutable'
import * as actions from './actions'

const defaultState = fromJS({
  code: '',
  ast: null,
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.updateCode:
      return state.set('code', action.value)

    case actions.updateAST:
      return state.set('ast', action.value)

    default:
      return state
  }
}
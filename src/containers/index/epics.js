import { combineEpics } from 'redux-observable'
import { parse } from 'acorn'
import * as actions from './actions'
import * as actionCreators from './actionCreators'

const updateAst = (action$, dispatch) => action$
  .ofType(actions.updateCode)
  .map(({ value }) => {
    try {
      return parse(value)
    } catch (e) {
      console.error(e)
      return { type: "Program", start: 0, end: 0, body: [], sourceType: "script" }
    }
  })
  .map(actionCreators.updateAST)

export default combineEpics(
  updateAst
)
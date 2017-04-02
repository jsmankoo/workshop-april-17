import * as actions from './actions'
import { value } from './actionPatterns'

const updateCode = value(actions.updateCode)
export { updateCode }

const updateAST = value(actions.updateAST)
export { updateAST }
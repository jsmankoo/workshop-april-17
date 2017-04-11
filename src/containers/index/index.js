import { compose, withHandlers, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import * as selectors from './selectors'
import * as actionCreators from './actionCreators'
import App from './Main'
import nodeToJson from './NodeToJson'

const defaultJson = {
  name: 'Default',
  children: [{
    name: 'JSON',
    size: 1
  }]
}

const enhancer = compose(
  connect((state) => ({
    ast: selectors.ast(state),
    code: selectors.code(state),
    json: testJSON(nodeToJson(selectors.ast(state))) ? nodeToJson(selectors.ast(state)) : defaultJson,
  })),
  withHandlers({
    handleOnChange: ({ dispatch }) => (value) => {
      dispatch(actionCreators.updateCode(value))
    }
  }),
  lifecycle({
    componentWillMount() {
      // Empty node
      this.props.dispatch(actionCreators.updateAST({ type: "Program", start: 0, end: 0, body: [], sourceType: "script" }))
    }
  })
)

function testJSON(json) {
  if (!json) return false
  if (json.name && json.size) return true
  if (json.name && Array.isArray(json.children))
    return json.children
      .map(testJSON)
      .reduce((acc, i) => acc && i, true)

  return false
}

export default enhancer(App)
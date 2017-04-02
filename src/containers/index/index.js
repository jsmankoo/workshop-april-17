import { compose, withHandlers, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import * as selectors from './selectors'
import * as actionCreators from './actionCreators'
import App from './Main'

const enhancer = compose(
  connect((state) => ({
    ast: selectors.ast(state),
    code: selectors.code(state),
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
    },
    componentDidUpdate() {
      const { ast } = this.props
      console.log(ast)
    }
  })
)

export default enhancer(App)

import { compose, withState, withHandlers } from 'recompose'
import App from './App'

const enhancer = compose(
  withState('code', 'updateCode', ''),
  withHandlers({
    handleOnChange: ({ updateCode }) => (value) => {
      updateCode(value)
    }
  })
)

export default enhancer(App)

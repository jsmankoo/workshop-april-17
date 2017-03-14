import { compose, withState } from 'recompose'
import App from './App'

const enhancer = compose(
  withState('code', 'updateCode', ''),
)

export default enhancer(App)

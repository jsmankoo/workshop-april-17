import { createSelector } from 'reselect'

export function index(state) {
  return state.index
}

const code = createSelector(
  [index],
  index => index.get('code')
)
export { code }

const ast = createSelector(
  [index],
  index => index.get('ast')
)
export { ast }
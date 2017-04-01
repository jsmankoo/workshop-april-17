import styled from 'styled-components'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/javascript/javascript'

const Code = styled(CodeMirror) `
  width: 100%;
`
export default Code
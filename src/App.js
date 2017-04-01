import React from 'react'
import CodeMirror from './components/CodeMirror/index'
import { Column } from './components/Styled/index'

export default function App({
  code,
  handleOnChange,
}) {
  console.log(code)
  return (
    <Column>
      <CodeMirror
        value={code}
        onChange={handleOnChange}
        style={{ width: '100%' }}
      />
    </Column>
  )
}
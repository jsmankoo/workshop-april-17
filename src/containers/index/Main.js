import React from 'react'
import CodeMirror from '../../components/CodeMirror/index'
import { Row } from '../../components/Styled/index'
import D3 from '../../components/D3/index'

export default function App({
  code, json,
  handleOnChange,
}) {
  console.log(JSON.stringify(json, null, 2))
  return (
    <Row>
      <CodeMirror
        value={code}
        onChange={handleOnChange}
      />
      <D3
        json={json}
      />
    </Row>
  )
}
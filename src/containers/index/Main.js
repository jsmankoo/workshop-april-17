import React from 'react'
import CodeMirror from '../../components/CodeMirror/index'
import { Row } from '../../components/Styled/index'
import { SVG } from '../../components/SVG/index'

export default function App({
  code,
  handleOnChange,
}) {
  console.log(code)
  return (
    <Row>
      <CodeMirror
        value={code}
        onChange={handleOnChange}
      />
      <SVG width='1000px' height='1000px'>
      </SVG>
    </Row>
  )
}
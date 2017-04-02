import React from 'react'
import CodeMirror from './CodeMirror'

const options = {
  autofocus: true,
  mode: { name: "javascript", json: true },
  theme: 'monokai',
  tabSize: 2,
  indentWithTabs: true,
  lineWrapping: true,
  lineNumbers: true
}

export default function Code({ value, onChange, style }) {
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

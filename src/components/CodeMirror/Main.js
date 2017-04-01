import React from 'react'
import CodeMirror from './CodeMirror'

const defaultValue = `
const author = {
  name: 'Jai S. Mankoo'
}
`

export default function Code({ value, onChange }) {
  return (
    <CodeMirror
      value={value || defaultValue}
      onChange={onChange}
      options={{
        autofocus: true,
        mode: { name: "javascript", json: true },
        theme: 'monokai',
        tabSize: 2,
        indentWithTabs: true,
        lineWrapping: true,
        lineNumbers: true
      }}
    />
  )
}

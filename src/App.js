import React, { Component } from 'react'
import CodeMirror from './components/CodeMirror/index'
import { Column } from './components/Styled/index'

class App extends Component {
  render() {
    const { code, updateCode } = this.props

    console.log(code)

    return (
      <Column>
        <CodeMirror
          value={code}
          onChange={updateCode}
        />
      </Column>
    );
  }
}

export default App;

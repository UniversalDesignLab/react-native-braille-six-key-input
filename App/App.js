import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Result from './components/Result'
import SixKeyInput from '../Package/src/components/SixKeyInput'

// HACK to fix "undefined is not an object evalutating self.fetch"
// - related to importing our component from a parent directory
if (typeof global.self === 'undefined') {
  global.self = global
}

const createOnTouchStartFn = i => () => {
  console.log('Pressed', i)
}

const createOnTouchEndFn = i => () => {
  console.log('Released', i)
}

class App extends Component {
  state = {
    value: '',
  }

  _onChangeHandler = value => {
    this.setState({ value: this.state.value + value })
    console.log(`${value} Pressed.`)
  }

  _clearResultValue = () => {
    this.setState({ value: '' })
  }

  _onDelete = () => {
    this.setState({
      value: this.state.value.slice(0, -1),
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Result value={this.state.value} />
        <SixKeyInput
          onChange={this._onChangeHandler}
          onDelete={this._onDelete}
          onClear={this._clearResultValue}
          onTouchStartFunctions={[1, 2, 3, 4, 5, 6].map(createOnTouchStartFn)}
          onTouchEndFunctions={[1, 2, 3, 4, 5, 6].map(createOnTouchEndFn)}
        />
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
})

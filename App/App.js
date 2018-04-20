import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ResponsiveStylesheet from "react-native-responsive-stylesheet";

import Result from './components/Result'
import SixKeyInput from '../Package/src/components/SixKeyInput'

// HACK to fix "undefined is not an object evalutating self.fetch"
// - related to importing our component from a parent directory
if (typeof global.self === 'undefined') {
  global.self = global
}

class App extends Component {
  state = {
    value: '',
  }

  _onChangeHandler = value => {
    this.setState({ value: this.state.value + value })
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
          clear={this._clearResultValue}
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

const normalStyles



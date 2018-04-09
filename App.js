import React, { Component } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import Result from "./components/Result"
import SixKeyInput from "./components/SixKeyInput";

import { theme, COLORS, brailleCharacters } from "./config"
import _ from "lodash"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonId: ''
    }
  }

  _onChangeHandler = buttonId => {
    this.setState({ buttonId: this.state.buttonId + buttonId })
  }

  _clearResultValue = () => {
    this.setState({ buttonId: '' })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Result
          value={this.state.buttonId}
        />
        <SixKeyInput
          onChange={this._onChangeHandler}
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
  // to (maybe) do inset box shadows in React Native, see — https://stackoverflow.com/questions/38084120/box-shadowinset-for-react-native
  // answerCorrect: {
  // boxShadow: 'inset 0 0 3px green'
  // borderColor: COLORS.green,
  // },
  // answerIncorrect: {
  // boxShadow: 'inset 0 0 3px red'
  // borderColor: COLORS.red,
  // },
});

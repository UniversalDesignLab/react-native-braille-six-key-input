import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../config'
import _parseInt from 'lodash/parseInt'

const { width, height } = Dimensions.get('window')

let counter = 0
let finalArray = []

class BrailleInput extends Component {
  state = {
    buttonIsTouched: false,
  }

  _onEndAllTouches = () => {
    this.props.onChange(finalArray)
    counter = 0
    finalArray = []
  }

  render() {
    return (
      <View
        style={
          this.state.buttonIsTouched
            ? [styles.inputButtons, styles.inputButtonPressed]
            : styles.inputButtons
        }
        onTouchStart={() => {
          this.setState({ buttonIsTouched: true })
          counter++
          finalArray.push(_parseInt(this.props.label))
        }}
        onTouchEnd={() => {
          this.setState({ buttonIsTouched: false })
          counter--
          if (counter === 0) {
            this._onEndAllTouches()
          }
        }}
      >
        <Text style={styles.inputButtonsText}>{this.props.label}</Text>
      </View>
    )
  }
}

export default BrailleInput

const styles = StyleSheet.create({
  inputButtons: {
    alignItems: 'center',
    borderColor: COLORS.grey,
    borderRadius: height * 0.14 / 2,
    borderWidth: 3,
    height: height * 0.14,
    width: height * 0.14,
    justifyContent: 'center',
    marginTop: height * 0.00625,
    marginBottom: height * 0.00625,
    marginLeft: 10,
    marginRight: 10,
  },
  inputButtonPressed: {
    backgroundColor: COLORS.blue,
  },
  inputButtonsText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: height * 0.07,
  },
})

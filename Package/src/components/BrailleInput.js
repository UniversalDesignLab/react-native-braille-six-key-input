import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../config'
import _parseInt from 'lodash/parseInt'

const { width, height } = Dimensions.get('window')

class BrailleInput extends Component {
  state = {
    buttonIsTouched: false,
    counter: 0,
    finalArray: [],
  }

  _onEndAllTouches = () => {
    props.onChange(this.state.finalArray)
    this.setState({ counter: 0, finalArray: [] })
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
          let touchArr = []
          touchArr.push(_parseInt(this.props.label))
          this.setState({
            buttonIsTouched: true,
            counter: this.state.counter + 1,
            finalArray: touchArr,
          })
        }}
        onTouchEnd={() => {
          this.setState({
            buttonIsTouched: false,
            counter: this.state.counter - 1,
          })
          if (this.state.counter === 0) {
            this.props._onEndAllTouches()
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
    borderRadius: 45,
    borderWidth: 3,
    height: 90,
    width: 90,
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
    fontSize: 40,
  },
})

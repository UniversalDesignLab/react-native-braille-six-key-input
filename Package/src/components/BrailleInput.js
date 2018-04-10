import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../config'
import _parseInt from 'lodash/parseInt'

let counter = 0
let finalArray = []

const BrailleInput = props => {
  const _onEndAllTouches = () => {
    props.onChange(finalArray)
    counter = 0
    finalArray = []
  }

  return (
    <View
      style={
        props.onTouchStart
          ? [styles.inputButtons, styles.inputButtonPressed]
          : styles.inputButtons
      }
      onTouchStart={() => {
        counter += 1
        finalArray.push(_parseInt(props.label))
      }}
      onTouchEnd={() => {
        counter -= 1
        if (counter === 0) {
          _onEndAllTouches()
        }
      }}
    >
      <Text style={styles.inputButtonsText}>{props.label}</Text>
    </View>
  )
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
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 15
  },
  inputButtonPressed: {
    backgroundColor: COLORS.blue
  },
  inputButtonsText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 48
  }
})

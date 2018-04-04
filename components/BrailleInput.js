import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS, brailleCharacters } from "../config"
import _ from "lodash";

let counter = 0

let finalArray = []

const BrailleInput = (props) => {
  let backgroundColor = COLORS.white

  const _onEndAllTouches = () => {
    props.onChange(finalArray)
    counter = 0
    finalArray = []
  }

  return (
    // <TouchableOpacity
    //   onPress={() => { props.onChange(props.label) }}
    // >
    <View
      style={props.onTouchStart ? [styles.inputButtons, styles.inputButtonPressed] : styles.inputButtons}
      onTouchStart={() => {
        counter += 1
        this.console.log(`${props.label} is Multi-touch Pressed.`)
        console.log(`Props label is: ${props.label}`)
        finalArray.push(_.parseInt(props.label))
      }
      }
      onTouchEnd={() => {
        this.console.log(`${props.label} is Multi-touch Released.`)
        counter -= 1
        console.log(`The finalArray is now: ${finalArray}`)
        if (counter === 0) {
          _onEndAllTouches()
        }
      }
      }
    >
      <Text style={styles.inputButtonsText}>{props.label}</Text>
    </View>
    // </TouchableOpacity >
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
    shadowRadius: 15,
  },
  inputButtonPressed: {
    backgroundColor: COLORS.blue
  },
  inputButtonsText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 48,
  },
})

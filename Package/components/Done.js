import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS, brailleCharacters } from "../config"

const textStyle = {
  color: COLORS.blue,
  fontSize: 20,
}

const Done = (props) => {

  _handleDonePressed = () => {
    return true
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => { console.log('Done is Pressed.') }}
      >
        <Text style={styles.doneTextStyle}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Done

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    maxHeight: 20,
    justifyContent: 'flex-end',
  },
  doneTextStyle: {
    ...textStyle,
    marginLeft: 140,
  },
})

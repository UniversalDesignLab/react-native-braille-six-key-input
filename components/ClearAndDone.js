import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS, brailleCharacters } from "../config"

const textStyle = {
  color: COLORS.blue,
  fontSize: 20,
}

const ClearAndDone = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.clear()
          console.log('Clear is Pressed and your Result Field is Cleared!')
        }
        }
      >
        <Text style={styles.clearTextStyle}>Clear</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { console.log('Done is Pressed.') }}
      >
        <Text style={styles.doneTextStyle}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ClearAndDone

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    maxHeight: 20,
    justifyContent: 'space-between',
  },
  clearTextStyle: {
    ...textStyle,
    marginRight: 70,
  },
  doneTextStyle: {
    ...textStyle,
    marginLeft: 70,
  },
})

import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { COLORS, brailleCharacters } from "../config"

const Result = (props) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        {props.value}
      </Text>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  resultContainer: {
    borderColor: COLORS.black,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 55,
    minWidth: 125,
    paddingBottom: 3,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
  },
  resultText: {
    alignSelf: 'center',
    fontSize: 18,
    width: '35%',
  },
})

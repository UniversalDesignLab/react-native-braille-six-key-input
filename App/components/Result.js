import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Result = props => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>{props.value}</Text>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  resultContainer: {
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 55,
    minHeight: 40,
    minWidth: 150,
    paddingBottom: 3,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
  },
  resultText: {
    alignSelf: 'center',
    fontSize: 36,
    width: '35%',
  },
})

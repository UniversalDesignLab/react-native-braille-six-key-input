import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { COLORS } from '../config'

const textStyle = {
  color: COLORS.blue,
  fontSize: 20,
}

const { width, height } = Dimensions.get('window')

const Done = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.doneTextStyle}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Done

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: height * 0.005,
    marginTop: height * 0.025,
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  doneTextStyle: {
    ...textStyle,
    marginLeft: width * 0.4,
  },
})

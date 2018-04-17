import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { COLORS } from '../config'

const { width, height } = Dimensions.get('window')

const textStyle = {
  color: COLORS.blue,
  fontSize: height * 0.0352,
}

const Done = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onDelete}>
        <Text style={styles.deleteTextStyle}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onDone}>
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
    justifyContent: 'space-around',
    zIndex: 1,
  },
  deleteTextStyle: {
    ...textStyle,
    marginRight: width * 0.25,
  },
  doneTextStyle: {
    ...textStyle,
    marginLeft: width * 0.25,
  },
})

import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import ResponsiveStylesheet from 'react-native-responsive-stylesheet'

import { COLORS } from '../config'

const { width, height } = Dimensions.get('window')

const Done = props => {
  const containerStyle = [normalStyles.container, responsiveStyles.container]
  const deleteTextStyle = [normalStyles.deleteText, responsiveStyles.deleteText]
  const doneTextStyle = [normalStyles.doneText, responsiveStyles.doneText]

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={props.onDelete}>
        <Text style={deleteTextStyle}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onDone}>
        <Text style={doneTextStyle}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Done

const normalStyles = ResponsiveStylesheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: height * 0.005,
    marginTop: height * 0.025,
    justifyContent: 'space-around',
    zIndex: 1,
  },
  deleteText: {
    color: COLORS.blue,
    fontSize: height * 0.0352,
    marginRight: width * 0.25,
    marginTop: 5,
  },
  doneText: {
    color: COLORS.blue,
    fontSize: height * 0.0352,
    marginLeft: width * 0.25,
    marginTop: 5,
  },
})

const responsiveStyles = ResponsiveStylesheet.createOriented({
  landscape: {
    container: {},
    deleteTextStyle: {
      fontSize: height * 0.0704,
      marginRight: width * 0.4,
    },
    doneTextStyle: {
      fontSize: height * 0.0704,
      marginRight: width * 0.4,
    },
  },
  portrait: {
    container: {},
    deleteTextStyle: {},
    doneTextStyle: {},
  },
})

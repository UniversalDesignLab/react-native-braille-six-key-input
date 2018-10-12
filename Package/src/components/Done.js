import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import ResponsiveStylesheet from 'react-native-responsive-stylesheet'
import PropTypes from 'prop-types'

import { COLORS } from '../config'

const { height } = Dimensions.get('window')

const Done = props => {
  const containerStyle = [normalStyles.container, responsiveStyles.container]
  const deleteTextStyle = [normalStyles.deleteText, responsiveStyles.deleteText]
  const clearTextStyle = [normalStyles.clearText, responsiveStyles.clearText]
  const doneTextStyle = [normalStyles.doneText, responsiveStyles.doneText]

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={props.onDelete}>
        <Text style={deleteTextStyle}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onClear}>
        <Text style={clearTextStyle}>Clear</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onDone}>
        <Text style={doneTextStyle}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}

Done.propTypes = {
  onDone: PropTypes.func,
  onDelete: PropTypes.func,
  onClear: PropTypes.func,
}

export default Done

const normalStyles = ResponsiveStylesheet.create({
  container: {
    flexDirection: 'row',
    // marginBottom: height * 0.01,
    justifyContent: 'space-between',
    zIndex: 1,
  },
  deleteText: {
    color: COLORS.blue,
    fontSize: height * 0.04,
    marginTop: 5,
  },
  clearText: {
    color: COLORS.blue,
    fontSize: height * 0.04,
    marginTop: 5,
  },
  doneText: {
    color: COLORS.blue,
    fontSize: height * 0.04,
    // marginLeft: width * 0.25,
    // marginRight: 60,
    marginTop: 5,
  },
})

const responsiveStyles = ResponsiveStylesheet.createOriented({
  landscape: {
    container: {
      // marginBottom: height * 0.03,
    },
    deleteText: {
      fontSize: height * 0.04,
      // marginRight: width * 0.4,
    },
    clearText: {
      fontSize: height * 0.04,
      textAlign: 'center',
    },
    doneText: {
      fontSize: height * 0.04,
      // marginLeft: width * 0.4,
    },
  },
  portrait: {
    container: {},
    deleteTextStyle: {
      // marginLeft: 25,
    },
    clearText: {},
    doneTextStyle: {
      // marginRight: 25,
    },
  },
})

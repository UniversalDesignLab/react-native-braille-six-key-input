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
        <Text style={deleteTextStyle} allowFontScaling={false}>
          Delete
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onClear}>
        <Text style={clearTextStyle} allowFontScaling={false}>
          Clear
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onDone}>
        <Text style={doneTextStyle} allowFontScaling={false}>
          Done
        </Text>
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
    marginTop: 5,
  },
})

const responsiveStyles = ResponsiveStylesheet.createOriented({
  landscape: {
    container: {},
    deleteText: {
      fontSize: height * 0.04,
    },
    clearText: {
      fontSize: height * 0.04,
      textAlign: 'center',
    },
    doneText: {
      fontSize: height * 0.04,
    },
  },
  portrait: {
    container: {},
    deleteTextStyle: {},
    clearText: {},
    doneTextStyle: {},
  },
})

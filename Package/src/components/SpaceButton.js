import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ResponsiveStylesheet from 'react-native-responsive-stylesheet'

import { COLORS } from '../config'

const SpaceButton = props => {
  const spaceButtonStyle = [
    normalStyles.spaceButton,
    responsiveStyles.spaceButton,
  ]

  const spaceButtonTextStyle = [
    normalStyles.spaceButtonText,
    responsiveStyles.spaceButtonText,
  ]

  return (
    <TouchableOpacity
      onPress={() => {
        props.onChange(' ')
      }}
    >
      <View style={spaceButtonStyle}>
        <Text style={spaceButtonTextStyle}>SPACE</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SpaceButton

const normalStyles = ResponsiveStylesheet.create({
  spaceButton: {
    alignItems: 'flex-end',
    borderColor: COLORS.grey,
    borderRadius: 10,
    borderWidth: 3,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  spaceButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 32,
  },
})

const responsiveStyles = ResponsiveStylesheet.createOriented({
  landscape: {
    spaceButton: {
      paddingHorizontal: 15,
      paddingVertical: 15,
    },
    spaceButtonText: {
      fontSize: 56,
    },
  },
  portrait: {
    spaceButton: {},
    spaceButtonText: {},
  },
})

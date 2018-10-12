import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ResponsiveStylesheet from 'react-native-responsive-stylesheet'
import PropTypes from 'prop-types'

import { COLORS, ifIphoneX, ifIPhone5s } from '../config'

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

SpaceButton.propTypes = {
  onChange: PropTypes.func,
}

export default SpaceButton

const normalStyles = ResponsiveStylesheet.create({
  spaceButton: {
    // alignItems: 'center',
    borderColor: COLORS.grey,
    borderRadius: 10,
    borderWidth: 3,
    minWidth: 115,
    maxWidth: 250,
    padding: ifIphoneX(3, 7),
  },
  spaceButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: ifIPhone5s(30, 60),
    textAlign: 'center',
  },
})

const responsiveStyles = ResponsiveStylesheet.createOriented({
  landscape: {
    spaceButton: {
      paddingHorizontal: 15,
      paddingVertical: 15,
    },
    spaceButtonText: {
      fontSize: 52,
    },
  },
  portrait: {
    spaceButton: {},
    spaceButtonText: {},
  },
})

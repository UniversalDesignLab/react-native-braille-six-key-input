import React, { Component } from 'react'
import { Dimensions, Text, View } from 'react-native'
import ResponsiveStylesheet from 'react-native-responsive-stylesheet'
import PropTypes from 'prop-types'

import { COLORS, ifIphoneX, ifIPhone5s } from '../config'

const { height } = Dimensions.get('screen')

let counter = 0
let finalArray = []

class BrailleInput extends Component {
  _onEndAllTouches = () => {
    this.props.onChange(finalArray)
    finalArray = []
  }

  render() {
    const inputButtonStyle = [
      normalStyles.inputButton,
      responsiveStyles.inputButton,
    ]

    const inputButtonPressedStyle = [
      normalStyles.inputButtonPressed,
      responsiveStyles.inputButtonPressed,
    ]

    const inputButtonTextStyle = [
      normalStyles.inputButtonText,
      responsiveStyles.inputButtonText,
    ]

    return (
      <View
        style={
          this.props.buttonIsTouched
            ? [inputButtonStyle, inputButtonPressedStyle]
            : inputButtonStyle
        }
      >
        <Text style={inputButtonTextStyle}>{this.props.label}</Text>
      </View>
    )
  }
}

BrailleInput.propTypes = {
  buttonIsTouched: PropTypes.bool,
  label: PropTypes.number,
  onChange: PropTypes.func,
}

export default BrailleInput

const normalStyles = ResponsiveStylesheet.create({
  inputButton: {
    alignItems: 'center',
    borderColor: COLORS.grey,
    borderRadius: ifIphoneX(
      (height * 0.14) / 2,
      ifIPhone5s((height * 0.144) / 2, (height * 0.16) / 2)
    ),
    borderWidth: 3,
    height: ifIphoneX(height * 0.14, ifIPhone5s(height * 0.144, height * 0.16)),
    width: ifIphoneX(height * 0.14, ifIPhone5s(height * 0.144, height * 0.16)),
    justifyContent: 'center',
    marginVertical: ifIPhone5s(height * 0.007, height * 0.008),
    marginHorizontal: 20,
  },
  inputButtonPressed: {
    backgroundColor: COLORS.blue,
  },
  inputButtonText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: ifIPhone5s(height * 0.09, height * 0.1),
  },
})

const responsiveStyles = ResponsiveStylesheet.createOriented({
  landscape: {
    inputButton: {
      borderRadius: (height * 0.22) / 2,
      height: height * 0.22,
      width: height * 0.22,
      marginVertical: 0,
      marginBottom: 3,
    },
    inputButtonPressed: {},
    inputButtonText: {
      fontSize: height * 0.135,
    },
  },
  portrait: {
    inputButton: {},
    inputButtonPressed: {},
    inputButtonText: {},
  },
})

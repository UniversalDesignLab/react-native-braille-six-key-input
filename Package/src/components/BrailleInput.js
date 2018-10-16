import React, { Component } from 'react'
import { Dimensions, Text, View } from 'react-native'
import ResponsiveStylesheet from 'react-native-responsive-stylesheet'
import PropTypes from 'prop-types'

import { COLORS, ifIphoneX, ifIPhone5s } from '../config'

// const { height } = Dimensions.get('screen')

let finalArray = []

class BrailleInput extends Component {
  _onEndAllTouches = () => {
    this.props.onChange(finalArray)
    finalArray = []
  }

  inputButtonStyles = ht => {
    return {
      borderRadius: ifIphoneX(
        (ht * 0.12) / 2,
        ifIPhone5s((ht * 0.144) / 2, (ht * 0.14) / 2)
      ),
      height: ifIphoneX(ht * 0.12, ifIPhone5s(ht * 0.144, ht * 0.14)),
      width: ifIphoneX(ht * 0.12, ifIPhone5s(ht * 0.144, ht * 0.14)),
      marginVertical: ifIPhone5s(ht * 0.007, ht * 0.008),
    }
  }

  inputButtonTextStyle = ht => {
    return {
      fontSize: ifIphoneX(ht * 0.07, ifIPhone5s(ht * 0.09, ht * 0.08)),
    }
  }

  render() {
    const { height } = Dimensions.get('screen')

    const inputButtonStyle = [
      normalStyles.inputButton,
      this.inputButtonStyles(height),
      responsiveStyles.inputButton,
    ]

    const inputButtonPressedStyle = [
      normalStyles.inputButtonPressed,
      responsiveStyles.inputButtonPressed,
    ]

    const inputButtonTextStyle = [
      normalStyles.inputButtonText,
      this.inputButtonTextStyle(height),
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
        <Text style={inputButtonTextStyle} allowFontScaling={false}>
          {this.props.label}
        </Text>
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
    borderWidth: 3,
    justifyContent: 'center',
    marginHorizontal: 12,
    marginVertical: 10,
  },
  inputButtonPressed: {
    backgroundColor: COLORS.blue,
  },
  inputButtonText: {
    color: 'rgba(255,255,255,0.7)',
  },
})

const responsiveStyles = ResponsiveStylesheet.createOriented({
  landscape: {
    inputButton: {
      marginVertical: 15,
    },
    inputButtonPressed: {},
    inputButtonText: {},
  },
  portrait: {
    inputButton: {},
    inputButtonPressed: {},
    inputButtonText: {},
  },
})

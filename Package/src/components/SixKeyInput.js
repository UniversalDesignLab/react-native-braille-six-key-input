import React, { Component } from 'react'
import { Dimensions, View } from 'react-native'
import ResponsiveStylesheet from 'react-native-responsive-stylesheet'
import PropTypes from 'prop-types'

import BrailleInput from './BrailleInput'
import SpaceButton from './SpaceButton'
import Done from './Done'

import { COLORS, ifIPhone5s } from '../config'
import { unicodeBrailleCharacters } from '../brailleObj'

const { width } = Dimensions.get('screen')

// Android Galaxy Tab-E Size: height: 961.5022957581195 width: 600.9389348488247

export default class SixKeyInput extends Component {
  state = {
    testArray: [],
    dotCharArray: [],
  }

  layout = {}

  _onLayout = ({ nativeEvent: { layout } }) => {
    console.log('layout:', layout)
    if (typeof this.layout.x === 'undefined') {
      this.layout = layout
      console.log('this.layout:', this.layout)
    }
  }

  onKeyboardMounted = el => {
    this.keyboard = el
    setTimeout(() => {
      el.measure((x, y, w, h, pX, pY) => {
        console.log(`x: ${x}\ny: ${y}\nw: ${w}\npX: ${pX}\npY: ${pY}`)
        this.layout.x = pX
        this.layout.y = pY
      })
    })
  }

  _sortArray = (a, b) => {
    return a - b
  }

  _noArrayDuplicates = theArray =>
    theArray.filter((elem, pos, arr) => arr.indexOf(elem) === pos)

  onMove = ({ nativeEvent: { changedTouches } }) => {
    const { width, height, x, y } = this.layout

    console.log(
      `in onMove():\n  width: ${width}\n  height: ${height}\n  x: ${x}\n  y: ${y}`
    )

    let testArray = [...this.state.testArray]

    for (let i = 0; i < changedTouches.length; i++) {
      const { pageX, pageY } = changedTouches[i]

      let xTouchSection = 0
      let yTouchSection = 0

      if (pageY - y > (height * 2) / 3) {
        yTouchSection = 3
      } else if (pageY - y > height * (1 / 3)) {
        yTouchSection = 2
      } else if (pageY > y) {
        yTouchSection = 1
      }

      if (pageX - x > (width * 2) / 3) {
        xTouchSection = 3
      } else if (pageX - x > width * (1 / 3)) {
        xTouchSection = 2
      } else if (pageX > x) {
        xTouchSection = 1
      }

      let btnTouchArray = xTouchSection.toString() + yTouchSection.toString()

      switch (btnTouchArray) {
        case '11':
          testArray.push(1)
          break
        case '12':
          testArray.push(2)
          break
        case '13':
          testArray.push(3)
          break
        case '31':
          testArray.push(4)
          break
        case '32':
          testArray.push(5)
          break
        case '33':
          testArray.push(6)
          break
        default:
          break
      }

      testArray = this._noArrayDuplicates(testArray.sort(this._sortArray))

      this.setState({ testArray, dotCharArray: testArray })
    }

    return true
  }

  onRelease = finalArray => {
    this.setState({ testArray: [] }, () => {
      // let arrResult = this.state.dotCharArray
      let brailleKey = this.state.dotCharArray.join('')
      let brailleChar = unicodeBrailleCharacters[brailleKey].char
      // console.log(newBrailleChar)
      // let brailleChar = _findKey(brailleCharacters, (value, key) => {
      //   return _isEqual(arrResult, value)
      // })
      if (brailleChar === undefined || brailleChar === null) {
        brailleChar = ''
      }
      this.props.onChange(brailleChar)
    })
  }

  render() {
    const grandparentContainerStyle = [
      normalStyles.grandparentContainer,
      responsiveStyles.grandparentContainer,
    ]
    const parentContainerStyle = [
      normalStyles.parentContainer,
      responsiveStyles.parentContainer,
    ]
    const spaceButtonStyle = [
      normalStyles.spaceButton,
      responsiveStyles.spaceButton,
    ]
    const colContainerLeftStyle = [
      normalStyles.colContainerLeft,
      responsiveStyles.colContainerLeft,
    ]
    const colContainerRightStyle = [
      normalStyles.colContainerRight,
      responsiveStyles.colContainerRight,
    ]

    return (
      <View style={grandparentContainerStyle}>
        <View style={parentContainerStyle}>
          {/* Done has an "onDone" prop that will be handled in the app where you in import this package. */}
          <Done
            onDone={this.props.onDone}
            onClear={this.props.onClear}
            onDelete={this.props.onDelete}
          />
        </View>
        <View
          onLayout={this.onLayout}
          ref={this.onKeyboardMounted}
          collapsable={false}
          onStartShouldSetResponder={this.onMove}
          onResponderMove={this.onMove}
          onResponderRelease={this.onRelease}
          style={{
            flex: 1,
            flexDirection: 'row',
          }}
        >
          <View style={colContainerLeftStyle}>
            <BrailleInput
              label={1}
              buttonIsTouched={this.state.testArray.indexOf(1) > -1}
            />
            <BrailleInput
              label={2}
              buttonIsTouched={this.state.testArray.indexOf(2) > -1}
            />
            <BrailleInput
              label={3}
              buttonIsTouched={this.state.testArray.indexOf(3) > -1}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.8)',
              justifyContent: 'center',
              padding: 30,
            }}
          >
            <SpaceButton style={spaceButtonStyle} onChange={char => char} />
          </View>
          <View style={colContainerRightStyle}>
            <BrailleInput
              label={4}
              buttonIsTouched={this.state.testArray.indexOf(4) > -1}
            />
            <BrailleInput
              label={5}
              buttonIsTouched={this.state.testArray.indexOf(5) > -1}
            />
            <BrailleInput
              label={6}
              buttonIsTouched={this.state.testArray.indexOf(6) > -1}
            />
          </View>
        </View>
      </View>
    )
  }
}

SixKeyInput.propTypes = {
  onDone: PropTypes.func,
  onDelete: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onTouchStartFunctions: PropTypes.arrayOf(PropTypes.func),
  onTouchEndFunctions: PropTypes.arrayOf(PropTypes.func),
}

const normalStyles = ResponsiveStylesheet.create({
  grandparentContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  parentContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderWidth: 2,
    borderTopColor: COLORS.black,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    justifyContent: 'center',
    padding: ifIPhone5s(8, 10),
  },
  rowContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spaceButton: {},
  colContainerLeft: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: ifIphoneX(30, 10),
    marginBottom: 5,
  },
  colContainerRight: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginRight: ifIphoneX(30, 10),
    marginBottom: 5,
  },
})

const responsiveStyles = ResponsiveStylesheet.createOriented({
  landscape: {
    grandparentContainer: {
      height: '78%',
    },
    parentContainer: {
      padding: 20,
    },
    rowContainer: {},
    spaceButton: {},
    colContainerLeft: {
      marginRight: width * 0.17,
    },
    colContainerRight: {
      marginLeft: width * 0.17,
    },
  },
  portrait: {
    grandparentContainer: {},
    parentContainer: {},
    rowContainer: {},
    spaceButton: {},
    colContainerLeft: {},
    colContainerRight: {},
  },
})

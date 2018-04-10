import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import BrailleInput from './BrailleInput'
import SpaceButton from './SpaceButton'
import Done from './Done'

import { COLORS, brailleCharacters } from '../config'
import _findKey from 'lodash/findKey'
import _isEqual from 'lodash/isEqual'

export default class SixKeyInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dotCharArray: []
    }
  }

  _sortArray = (a, b) => {
    return a - b
  }

  _noArrayDuplicates = theArray => {
    return theArray.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos
    })
  }

  _onChangeButtonsReleased = finalArray => {
    this.setState(
      {
        dotCharArray: this._noArrayDuplicates(finalArray.sort(this._sortArray))
      },
      () => {
        // console.log(`From within SixKeyInput & the onChange func., dotCharArray is: ${this.state.dotCharArray}`)
        let arrResult = this.state.dotCharArray
        let brailleChar = _findKey(brailleCharacters, (value, key) => {
          return _isEqual(arrResult, value)
        })
        // console.log(`The brailleChar is now set to: ${brailleChar}`)
        if (brailleChar === undefined) {
          // brailleChar = 'Not a Braille Character.'
          brailleChar = ''
        }
        this.props.onChange(brailleChar)
      }
    )
  }

  render() {
    const choices = [1, 2, 3, 4, 5, 6]

    return (
      <View style={styles.grandparentContainer}>
        <View style={styles.parentContainer}>
          <Done clear={this.props.clear} />
          <View style={styles.rowContainer}>
            <View style={styles.colContainer}>
              {choices
                .slice(0, 3)
                .map((choice, i) => (
                  <BrailleInput
                    label={choice}
                    onChange={this._onChangeButtonsReleased}
                    key={i}
                  />
                ))}
            </View>
            <View style={styles.colContainer}>
              {choices
                .slice(3, 6)
                .map((choice, i) => (
                  <BrailleInput
                    label={choice}
                    onChange={this._onChangeButtonsReleased}
                    key={i}
                  />
                ))}
            </View>
          </View>
          <SpaceButton onChange={this.props.onChange} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  grandparentContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 95
  },
  parentContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    borderWidth: 2,
    borderColor: COLORS.black,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    minHeight: 500,
    paddingBottom: 5,
    width: 325
  },
  rowContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  colContainer: {
    marginTop: 12,
    marginBottom: 12,
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
})

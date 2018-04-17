import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import BrailleInput from './BrailleInput'
import SpaceButton from './SpaceButton'
import Done from './Done'

import { COLORS, brailleCharacters } from '../config'
import _findKey from 'lodash/findKey'
import _isEqual from 'lodash/isEqual'

const { width, height } = Dimensions.get('window')
export default class SixKeyInput extends Component {
  state = {
    dotCharArray: [],
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
        dotCharArray: this._noArrayDuplicates(finalArray.sort(this._sortArray)),
      },
      () => {
        let arrResult = this.state.dotCharArray
        let brailleChar = _findKey(brailleCharacters, (value, key) => {
          return _isEqual(arrResult, value)
        })
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
          {/* Done has an "onDone" prop that will be handled in the app where you in import this package. */}
          <Done onDone={this.props.onDone} onDelete={this.props.onDelete} />
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
            <View>
              <SpaceButton onChange={this.props.onChange} />
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
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  grandparentContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderWidth: 2,
    borderTopColor: COLORS.black,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colContainer: {
    marginBottom: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
})

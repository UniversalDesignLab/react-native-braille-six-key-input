import React, { Component } from 'react'
import { Animated, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { theme, COLORS, brailleCharacters } from "./config"
import _ from "lodash"

/* export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Open up App.js to start working on your app!</Text>
        <Text style={styles.altTextStyle}>Shake your phone to open the developer menu.</Text>
        <Text style={styles.textStyle}>Changes you make will automatically reload.</Text>
      </View>
    );
  }
} */

const BrailleInput = (props) => {
  let backgroundColor = COLORS.white
  /* const correctAnswer = _.isEqual(brailleCharacters[props.answer].sort(), props.value.sort())

  if (props.selected && props.submitted && correctAnswer) {
    backgroundColor = COLORS.green
  } else if (props.selected && props.submitted && !correctAnswer) {
    backgroundColor = COLORS.red
  } else if (props.selected) {
    backgroundColor = COLORS.blue
  }
  const textColor = backgroundColor === COLORS.white ? COLORS.black : COLORS.white */

  _handleButtonPress = () => {
    const cellValues = _.cloneDeep(props.value)
    const choice = props.label

    // need to toggle on/off the value by adding/removing the chocie in cellValues
    if (cellValues.includes(choice)) {
      _.pull(cellValues, choice) // remove choice from array
    } else {
      cellValues.push(choice)
    }

    props.onChange(cellValues)
  }


  return (
    <TouchableOpacity
      onPress={() => {
        const cellValues = _.cloneDeep(props.value)
        const choice = props.label

        // need to toggle on/off the value by adding/removing the chocie in cellValues
        if (cellValues.includes(choice)) {
          _.pull(cellValues, choice) // remove choice from array
        } else {
          cellValues.push(choice)
        }

        props.onChange(cellValues)
      }
      }
    >
      <View style={styles.inputButtons}>
        <Text style={styles.inputButtonsText}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Result = (props) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={{ alignSelf: 'center', fontSize: 24, width: '35%' }}>
        {props.label}
      </Text>
    </View>
  )
}

const SixKeyInput = ({ value, onChange, answer, submitted }) => {
  value = _.isNil(value) ? [] : value

  _onChangeHandler = (props) => {
    return console.log(`${props.label} Button Pressed!`)
  }

  /*   let shadow = {}
    if (submitted) {
      const correctAnswer = _.isEqual(brailleCharacters[answer].sort(), value.sort())
      shadow = correctAnswer ? styles.answerCorrect : styles.answerIncorrect
    } */

  const choices = [1, 2, 3, 4, 5, 6]
  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <Result />
      <View style={styles.grandparentContainer}>
        {/* <Text style={{ marginLeft: '7%' }}>Answer:</Text> */}
        <View style={styles.parentContainer}>
          <View style={styles.rowContainer}>
            {/* this is where {[styles.rowContainer, shadow]} used t'be */}
            <View style={styles.colContainer}>
              {choices.slice(0, 3).map((choice, i) => <BrailleInput
                label={choice}
                selected={value.includes(choice)}
                onChange={_onChangeHandler}
                answer={answer}
                value={value}
                submitted={submitted}
                key={i}
              />)}
            </View>
            <View style={styles.colContainer}>
              {choices.slice(3, 6).map((choice, i) => <BrailleInput
                label={choice}
                selected={value.includes(choice)}
                onChange={_onChangeHandler}
                answer={answer}
                value={value}
                submitted={submitted}
                key={i}
              />)}
            </View>
          </View>
          <TouchableOpacity
            onPress={_onChangeHandler}
            onChange={_onChangeHandler}
          >
            <View style={styles.spaceButton}>
              <Text style={styles.spaceButtonText}>SPACE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SixKeyInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    borderColor: COLORS.black,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 60,
    minWidth: 125,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
  },
  resultText: {
    alignSelf: 'center',
    fontSize: 24,
    width: '35%',
  },
  grandparentContainer: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7DC6F',
    justifyContent: 'center',
    marginTop: 70,
  },
  parentContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    borderWidth: 2,
    borderColor: COLORS.black,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: 'center',
    marginBottom: 12,
    minHeight: 500,
    padding: 15,
    width: 325,
  },
  rowContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colContainer: {
    marginTop: 12,
    marginBottom: 12,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  brailleContent: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  inputButtons: {
    alignItems: 'center',
    borderColor: COLORS.grey,
    borderRadius: 45,
    borderWidth: 3,
    height: 90,
    width: 90,
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 15,
  },
  inputButtonsText: {
    color: COLORS.white,
    fontSize: 48,
  },
  spaceButton: {
    alignItems: 'flex-end',
    borderColor: COLORS.grey,
    borderRadius: 10,
    borderWidth: 2,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  spaceButtonText: {
    color: COLORS.white,
    fontSize: 40,
  },
  // to (maybe) do inset box shadows in React Native, see — https://stackoverflow.com/questions/38084120/box-shadowinset-for-react-native
  answerCorrect: {
    // boxShadow: 'inset 0 0 3px green'
    borderColor: COLORS.green,
  },
  answerIncorrect: {
    // boxShadow: 'inset 0 0 3px red'
    borderColor: COLORS.red,
  },
  textStyle: {
    color: '#000099',
    fontSize: 24,
    fontWeight: '700',
  },
  altTextStyle: {
    color: '#990000',
    fontSize: 30,
    fontWeight: '700',
  },
});

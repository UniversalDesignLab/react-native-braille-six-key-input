import React, { Component } from 'react'
import { Animated, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { theme, COLORS, brailleCharacters } from "./config"
import _ from "lodash"

const BrailleInput = (props) => {
  let backgroundColor = COLORS.white

  return (
    <TouchableOpacity
      onPress={() => { props.onChange(props.label) }}
    >
      <View
        style={styles.inputButtons}
        onTouchStart={() => this.console.log(`${props.label} is Multi-touch Pressed.`)}
        onTouchEnd={() => this.console.log(`${props.label} is Multi-touch Released.`)}
      >
        <Text style={styles.inputButtonsText}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Result = (props) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={{ alignSelf: 'center', fontSize: 24, width: '35%' }}>
        {props.value}
      </Text>
    </View>
  )
}

const SpaceButton = (props) => {

  return (
    <TouchableOpacity
      onPress={() => { props.onChange('SPACE') }}
    >
      <View
        style={styles.spaceButtonStyle}
        onTouchStart={() => this.console.log("Space Button is Multi-touch Pressed")}
        onTouchEnd={() => this.console.log("Space Button is Multi-touch Released")}
      >
        <Text style={styles.spaceButtonText}>SPACE</Text>
      </View>
    </TouchableOpacity>
  )
}

const SixKeyInput = ({ onChange }) => {

  const choices = [1, 2, 3, 4, 5, 6]

  return (
    <View style={styles.grandparentContainer}>
      {/* <Text style={{ marginLeft: '7%' }}>Answer:</Text> */}
      <View style={styles.parentContainer}>
        <View style={styles.rowContainer}>
          {/* this is where {[styles.rowContainer, shadow]} used t'be */}
          <View style={styles.colContainer}>
            {choices.slice(0, 3).map((choice, i) => <BrailleInput
              label={choice}
              onChange={onChange}
              key={i}
            />)}
          </View>
          <View style={styles.colContainer}>
            {choices.slice(3, 6).map((choice, i) => <BrailleInput
              label={choice}
              onChange={onChange}
              key={i}
            />)}
          </View>
        </View>
        <SpaceButton
          onChange={onChange}
        />
      </View>
    </View>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonId: []
    }
  }

  _onChangeHandler = buttonId => {
    this.setState({ buttonId: this.state.buttonId += buttonId })
    console.log(`${buttonId} Button Pressed!`)
  }

  /* _onChangeHandler = this.state.buttonId.map((buttonId, i) => {
    if (buttonId === this.state.buttonId[i]) {
      this.props.value = "Dots Cannot Be Repeated."
      console.log(`Dots Cannot Be Repeated.`)
    } else {
      this.setState({ buttonId: this.state.buttonId += buttonId })
      console.log(`${buttonId} Button Pressed!`)
    }
  }) */

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', }}>
        <Result
          value={this.state.buttonId}
        />
        <SixKeyInput
          onChange={this._onChangeHandler} />
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  resultContainer: {
    borderColor: COLORS.black,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 55,
    minWidth: 125,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
  },
  resultText: {
    alignSelf: 'center',
    fontSize: 24,
    width: '35%',
  },
  grandparentContainer: {
    alignContent: 'center',
    alignItems: 'center',
    /* backgroundColor: '#C0392B', */
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    minHeight: 500,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
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
    color: 'rgba(255,255,255,0.7)',
    fontSize: 48,
  },
  spaceButtonStyle: {
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
    color: 'rgba(255,255,255,0.7)',
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
});

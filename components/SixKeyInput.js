import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import BrailleInput from "./BrailleInput"
import SpaceButton from "./SpaceButton"
import ClearAndDone from "./ClearAndDone";

import { COLORS, brailleCharacters } from "../config"

export default class SixKeyInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dotCharArray: []
        }
    }

    _onChangeButtonsReleased = buttonId => {
        console.log(`${buttonId} Button Pressed!`)
        let outputArr = [...this.state.dotCharArray, buttonId]
        this.setState({ dotCharArray: outputArr }, () => console.log(this.state.dotCharArray))
        this.props.onChange(this.state.dotCharArray)
        // this.setState({ dotCharArray: [] })
        // outputArr = []
    }

    render() {

        const choices = [1, 2, 3, 4, 5, 6]

        return (
            <View style={styles.grandparentContainer} >
                <View style={styles.parentContainer}>
                    <ClearAndDone />
                    <View style={styles.rowContainer}>
                        {/* this is where {[styles.rowContainer, shadow]} used t'be */}
                        <View style={styles.colContainer}>
                            {choices.slice(0, 3).map((choice, i) =>
                                <BrailleInput
                                    label={choice}
                                    onChange={this._onChangeButtonsReleased}
                                    key={i}
                                />
                            )}
                        </View>
                        <View style={styles.colContainer}>
                            {choices.slice(3, 6).map((choice, i) =>
                                <BrailleInput
                                    label={choice}
                                    onChange={this._onChangeButtonsReleased}
                                    key={i}
                                />
                            )}
                        </View>
                    </View>
                    <SpaceButton
                        onChange={this._onChangeButtonsRelease}
                    />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    grandparentContainer: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
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
        width: 325,
    },
    rowContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    colContainer: {
        marginTop: 12,
        marginBottom: 12,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
})
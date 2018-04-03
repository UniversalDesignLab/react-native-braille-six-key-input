import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS, brailleCharacters } from "../config"

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

export default BrailleInput

const styles = StyleSheet.create({
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
})
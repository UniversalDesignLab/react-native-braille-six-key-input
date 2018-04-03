import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import BrailleInput from "./BrailleInput"
import SpaceButton from "./SpaceButton"

import { COLORS, brailleCharacters } from "../config"

const SixKeyInput = ({ onChange }) => {

    const choices = [1, 2, 3, 4, 5, 6]

    return (
        <View style={styles.grandparentContainer}>
            {/* <Text style={{ marginLeft: '7%' }}>Answer:</Text> */}
            <View style={styles.parentContainer}>
                <View style={styles.rowContainer}>
                    {/* this is where {[styles.rowContainer, shadow]} used t'be */}
                    <View style={styles.colContainer}>
                        {choices.slice(0, 3).map((choice, i) =>
                            <BrailleInput
                                label={choice}
                                onChange={onChange}
                                key={i}
                            />
                        )}
                    </View>
                    <View style={styles.colContainer}>
                        {choices.slice(3, 6).map((choice, i) =>
                            <BrailleInput
                                label={choice}
                                onChange={onChange}
                                key={i}
                            />
                        )}
                    </View>
                </View>
                <SpaceButton
                    onChange={onChange}
                />
            </View>
        </View>
    )
}

export default SixKeyInput

const styles = StyleSheet.create({
    grandparentContainer: {
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
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
})
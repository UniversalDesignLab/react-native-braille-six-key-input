import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS, brailleCharacters } from "../config"

const SpaceButton = (props) => {

    return (
        <TouchableOpacity
            onPress={() => { props.onChange(' ') }}
        >
            <View style={styles.spaceButtonStyle}>
                <Text style={styles.spaceButtonText}>SPACE</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SpaceButton

const styles = StyleSheet.create({
    spaceButtonStyle: {
        alignItems: 'flex-end',
        borderColor: COLORS.grey,
        borderRadius: 10,
        borderWidth: 2,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
    },
    spaceButtonText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 40,
    },
})
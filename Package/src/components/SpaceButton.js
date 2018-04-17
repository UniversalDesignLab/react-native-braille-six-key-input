import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS } from '../config'

const SpaceButton = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onChange(' ')
      }}
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  spaceButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 32,
  },
})

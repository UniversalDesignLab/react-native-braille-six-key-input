import { Dimensions, Platform } from 'react-native'

export const COLORS = {
  black: '#020202',
  blue: '#29AFB5',
  green: '#6CB519',
  grey: '#8C8C8C',
  orange: '#F16227',
  purple: '#9013FE',
  red: '#A90122',
  textColor: '#1F314A',
  yellow: '#F2AA20',
  white: '#ffffff',
}

export const isIphoneX = () => {
  let dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  )
}

export const isIphoneXSMax = () => {
  let dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 896 || dimen.width === 896)
  )
}

export const isIphone5s = () => {
  let height = Dimensions.get('screen').height
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 568 || height === 568)
  )
}

export const ifIphoneXSMax = (iphoneXSMaxStyle, regularStyle) => {
  if (isIphoneXSMax()) {
    return iphoneXSMaxStyle
  } else {
    return regularStyle
  }
}

export const ifIphoneX = (iphoneXStyle, regularStyle) => {
  if (isIphoneX()) {
    return iphoneXStyle
  } else {
    return regularStyle
  }
}

export const ifIPhone5s = (littlestIPhoneStyle, regularStyle) => {
  if (isIphone5s()) {
    return littlestIPhoneStyle
  } else {
    return regularStyle
  }
}

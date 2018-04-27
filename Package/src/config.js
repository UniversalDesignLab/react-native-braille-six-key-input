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

export const brailleCharacters = {
  a: [1],
  b: [1, 2],
  c: [1, 4],
  d: [1, 4, 5],
  e: [1, 5],
  f: [1, 2, 4],
  g: [1, 2, 4, 5],
  h: [1, 2, 5],
  i: [2, 4],
  j: [2, 4, 5],
  k: [1, 3],
  l: [1, 2, 3],
  m: [1, 3, 4],
  n: [1, 3, 4, 5],
  o: [1, 3, 5],
  p: [1, 2, 3, 4],
  q: [1, 2, 3, 4, 5],
  r: [1, 2, 3, 5],
  s: [2, 3, 4],
  t: [2, 3, 4, 5],
  u: [1, 3, 6],
  v: [1, 2, 3, 6],
  w: [2, 4, 5, 6],
  x: [1, 3, 4, 6],
  y: [1, 3, 4, 5, 6],
  z: [1, 3, 5, 6],
}

export const brailleSpcChars = {
  ',': [2],
  ';': [2, 3],
  ':': [2, 5],
  '.': [2, 5, 6],
  '?': [2, 3, 6],
  '!': [2, 3, 5],
  '‘': [3],
  '-': [3, 6],
}

export const brailleNums = {
  '1': [[3, 4, 5, 6], [1]],
  '2': [[3, 4, 5, 6], [1, 2]],
  '3': [[3, 4, 5, 6], [1, 4]],
  '4': [[3, 4, 5, 6], [1, 4, 5]],
  '5': [[3, 4, 5, 6], [1, 5]],
  '6': [[3, 4, 5, 6], [1, 2, 4]],
  '7': [[3, 4, 5, 6], [1, 2, 4, 5]],
  '8': [[3, 4, 5, 6], [1, 2, 5]],
  '9': [[3, 4, 5, 6], [2, 4]],
  '0': [[3, 4, 5, 6], [2, 4, 5]],
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

export const isIphone5s = () => {
  let height = Dimensions.get('screen').height
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 568 || height === 568)
  )
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

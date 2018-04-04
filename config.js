'use strict';

exports.__esModule = true;
const theme = exports.theme = {
  lightBg: '#eff3f6',
  lightGrey: '#DFE2E5',

  orange: '#F16227',
  coolGrey: '#7F8FA4',
  coolGreyHover: '#505e71',
  coolGreyActive: '#354052',

  black: '#516173',
  red: '#ED1C24',
  green: '#36AF47',
  yellow: '#F2AA20',
  yellowHover: '#f19f07',
  teal: '#07ABC5',
  tealHover: '#00a1b9',
  purple: '#8431DD',
  purpleHover: '#7822d4',

  radius: 4,

  buttonShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  }
};

const COLORS = exports.COLORS = {
  black: '#020202',
  blue: '#29AFB5',
  green: '#6CB519',
  grey: '#8C8C8C',
  orange: '#F16227',
  purple: '#9013FE',
  red: '#A90122',
  textColor: '#1F314A',
  yellow: '#F2AA20',
  white: '#ffffff'
};

const brailleCharacters = exports.brailleCharacters = {
  "a": [1],
  "b": [1, 2],
  "c": [1, 4],
  "d": [1, 4, 5],
  "e": [1, 5],
  "f": [1, 2, 4],
  "g": [1, 2, 4, 5],
  "h": [1, 2, 5],
  "i": [2, 4],
  "j": [2, 4, 5],
  "k": [1, 3],
  "l": [1, 2, 3],
  "m": [1, 3, 4],
  "n": [1, 3, 4, 5],
  "o": [1, 3, 5],
  "p": [1, 2, 3, 4],
  "q": [1, 2, 3, 4, 5],
  "r": [1, 2, 3, 5],
  "s": [2, 3, 4],
  "t": [2, 3, 4, 5],
  "u": [1, 3, 6],
  "v": [1, 2, 3, 6],
  "w": [2, 4, 5, 6],
  "x": [1, 3, 4, 6],
  "y": [1, 3, 4, 5, 6],
  "z": [1, 3, 5, 6]/* ,
  "#": [3, 4, 5, 6],
  "1": [1],
  "2": [1, 2],
  "3": [1, 4],
  "4": [1, 4, 5],
  "5": [1, 5],
  "6": [1, 2, 4],
  "7": [1, 2, 4, 5],
  "8": [1, 2, 5],
  "9": [2, 4],
  "0": [2, 4, 5],
  ",": [2],
  ";": [2, 3],
  ":": [2, 5],
  ".": [2, 5, 6],
  "?": [2, 3, 6],
  "!": [2, 3, 5],
  "‘": [3],
  "-": [3, 6] */
}

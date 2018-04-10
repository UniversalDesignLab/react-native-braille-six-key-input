const path = require('path')

module.exports = {
  extraNodeModules: {
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    react: path.resolve(__dirname, 'node_modules/react')
  },
  getProjectRoots() {
    return [path.join(__dirname, '..', 'Package'), __dirname]
  }
}

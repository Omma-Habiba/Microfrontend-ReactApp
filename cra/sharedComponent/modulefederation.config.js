const { dependencies } = require('./package.json');

module.exports = {
  name: 'shared_component',
  exposes: {
    './Button': './src/Button',
    './Footer': './src/components/Footer',
    './Header': './src/components/Header',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};



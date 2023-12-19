module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    [
      'module-resolver',
      {
        alias: {
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@selectors': './src/store/selectors',
          '@actions': './src/store/actions',
          '@actionTypes': './src/store/actionTypes',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@components': './src/components',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@api': './src/api',
          '@interfaces': './src/interfaces',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

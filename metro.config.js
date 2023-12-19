// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const defaultAssetExts =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('metro-config/src/defaults/defaults').assetExts;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: [
      ...defaultAssetExts,
      'obj',
      'mtl',
      'mp3',
      'JPG',
      'vrx',
      'hdr',
      'gltf',
      'glb',
      'bin',
      'arobject',
      'gif',
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

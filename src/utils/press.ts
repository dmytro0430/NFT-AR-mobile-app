import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export const hapticPress = (func: () => void) => {
  ReactNativeHapticFeedback.trigger('selection', options);
  func();
};

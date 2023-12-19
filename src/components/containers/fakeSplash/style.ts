import { COLORS } from '@theme';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  imageBG: {
    backgroundColor: COLORS.background,
    height,
    width,
  },
  test: {
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: height * 1.3,
    height: height * 1.3,
    overflow: 'hidden',
    position: 'absolute',
    width: width * 1.5,
    zIndex: 100,
  },
  video: {
    bottom: 0,
    flex: 1,
    height,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width,
  },
});

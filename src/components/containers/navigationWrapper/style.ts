import { COLORS } from '@theme';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  filterColor: {
    backgroundColor: COLORS.filter,
  },
  imageBG: {
    backgroundColor: COLORS.background,
    flex: 1,
    height,
    width,
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

import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
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

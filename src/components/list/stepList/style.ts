import { relativeHeight } from '@utils';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    maxHeight: relativeHeight(286),
    width,
  },
  containerPaginator: {
    marginTop: relativeHeight(24),
    width,
  },
  imageStyle: {
    width,
  },
  list: {
    width,
    zIndex: 1,
  },
  model: {
    height: relativeHeight(250),
    width,
  },
});

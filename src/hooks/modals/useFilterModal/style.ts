import { COLORS } from '@theme';
import { width } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 0,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 10,
    height: 300,
    justifyContent: 'center',
    width: width - 32,
  },
});

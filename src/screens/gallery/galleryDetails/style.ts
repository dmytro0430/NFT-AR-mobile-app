import { COLORS, fontStylesCatalog } from '@theme';
import { relativeHeight, relativeWidth } from '@utils';
import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  buttonStyle: {
    height: 60,
    marginTop: 10,
    width: '100%',
  },
  container: {
    alignItems: 'center',
    width: '100%',
  },
  picture: {
    backgroundColor: COLORS.background,
    borderRadius: 8,
    height: relativeHeight(353),
    width: relativeWidth(353),
  },
  title: {
    color: COLORS.white,
    ...fontStylesCatalog.RProBold_40,
    marginTop: relativeHeight(11),
    textAlign: 'center',
  },
  titleStyle: {
    ...fontStylesCatalog.RProBold_20,
    paddingVertical: 9,
  },
  wrapper: {
    height,
    paddingHorizontal: relativeWidth(20),
  },
});

import { COLORS, fontStylesCatalog } from '@theme';
import { relativeHeight, relativeWidth } from '@utils';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  blur: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: COLORS.transparent,
    marginTop: relativeHeight(10),
    padding: 8,
    width: width / 2,
  },
  buttonTitle: {
    ...fontStylesCatalog.RProBold_20,
    color: COLORS.orange,
    textTransform: 'uppercase',
  },
  text: {
    ...fontStylesCatalog.RProBold_20,
    color: COLORS.white,
    marginTop: relativeHeight(5),
    textAlign: 'center',
  },
  textWrapper: {
    marginTop: relativeHeight(15),
    padding: 10,
  },
  toastStyle: {
    ...fontStylesCatalog.RProBold_20,
    color: COLORS.white,
  },
  topContainer: {
    alignItems: 'center',
    paddingBottom: relativeHeight(30),
    paddingTop: relativeHeight(40),
  },
  touch: {
    width: width / 2,
  },
  wrapper: {
    height: relativeHeight(650),
    justifyContent: 'center',
    paddingHorizontal: relativeWidth(20),
  },
});

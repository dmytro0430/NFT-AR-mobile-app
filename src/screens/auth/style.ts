import { COLORS, fontStylesCatalog } from '@theme';
import { relativeHeight, relativeWidth } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomContainer: {
    height: relativeHeight(290),
    justifyContent: 'space-between',
    marginTop: relativeHeight(86),
    paddingBottom: relativeHeight(35),
    paddingHorizontal: relativeWidth(16),
    paddingTop: relativeHeight(50),
  },
  subtitle: {
    ...fontStylesCatalog.RPro_21,
    color: COLORS.white,
    marginTop: relativeHeight(14),
    textAlign: 'center',
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    ...fontStylesCatalog.RProBold_30,
    color: COLORS.white,
  },
  topButton: {
    marginTop: relativeHeight(19),
    width: relativeWidth(176),
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: relativeHeight(39),
  },
  try: {
    ...fontStylesCatalog.RProBold_37,
  },
  wrapper: {
    width: '100%',
  },
});

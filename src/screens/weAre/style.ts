import { COLORS, fontStylesCatalog } from '@theme';
import { relativeHeight } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  boldTitle: {
    color: COLORS.violet,
    ...fontStylesCatalog.RProBold_19,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: relativeHeight(30),
  },
  container: {
    marginTop: relativeHeight(20),
    paddingHorizontal: 20,
  },
  contentTitle: {
    color: COLORS.white,
    paddingTop: relativeHeight(18),
    ...fontStylesCatalog.RLight_19,
  },
  learnMoreTitle: {
    color: COLORS.white,
    ...fontStylesCatalog.RProBold_15,
    paddingVertical: relativeHeight(25),
  },
  links: {
    color: COLORS.white,
    ...fontStylesCatalog.RProBold_20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: relativeHeight(20),
  },
  social: {
    color: COLORS.white,
    ...fontStylesCatalog.RProBold_15,
  },
  socialContainer: {
    flex: 1,
  },
  topTitle: {
    color: COLORS.white,
    ...fontStylesCatalog.RProBold_39,
    textAlign: 'center',
  },
});

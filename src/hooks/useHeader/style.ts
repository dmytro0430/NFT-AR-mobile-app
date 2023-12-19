import { COLORS, fontStylesCatalog } from '@theme';
import { relativeWidth } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  burger: {
    height: relativeWidth(32),
    width: relativeWidth(32),
  },
  container: {
    backgroundColor: COLORS.background,
    elevation: 0,
    shadowOpacity: 0,
  },
  immageStyle: {
    height: relativeWidth(22),
    width: relativeWidth(22),
  },
  leftMenu: {
    backgroundColor: COLORS.transparent,
    paddingLeft: 10,
  },
  title: {
    ...fontStylesCatalog.RProBold_20,
    color: COLORS.white,
    textAlign: 'center',
  },
  titleStyle: {
    ...fontStylesCatalog.RPro_16,
    color: COLORS.white,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

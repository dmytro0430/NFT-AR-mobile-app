import { COLORS, fontStylesCatalog } from '@theme';
import { relativeHeight, relativeWidth } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    height: 85,
    paddingTop: 5,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.background,
    flexDirection: 'row',
  },
  iconStyle: {
    height: relativeHeight(40),
    width: relativeWidth(50),
  },
  itemContainer: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    ...fontStylesCatalog.RProBold_14,
    color: COLORS.white,
  },
});

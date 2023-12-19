import { COLORS, fontStylesCatalog } from '@theme';
import { relativeHeight, relativeWidth } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonImage: {
    height: relativeWidth(22),
    marginLeft: relativeHeight(10),
    width: relativeWidth(22),
  },
  buttonStyle: {
    backgroundColor: COLORS.transparent,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  buttonTitle: {
    ...fontStylesCatalog.RProBold_20,
    color: COLORS.white,
  },
  container: {
    marginTop: relativeHeight(10),
    width: '100%',
  },
  traitContainer: {
    flexDirection: 'row',
    marginTop: relativeHeight(10),
  },
  traitType: {
    ...fontStylesCatalog.TD_16,
    color: COLORS.white,
    flex: 1,
    marginRight: relativeWidth(5.5),
  },
  traitValue: {
    ...fontStylesCatalog.TD_16,
    flex: 1.2,
  },
});

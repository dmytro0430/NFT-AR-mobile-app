import { COLORS, fontStylesCatalog } from '@theme';
import { Dimensions, StyleSheet } from 'react-native';
const width = (Dimensions.get('window').width - 4 * 16) / 2;
export const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  contentContainer: {
    paddingBottom: 42,
  },
  image: {
    backgroundColor: COLORS.background,
    borderRadius: 8,
    height: '100%',
    width: '100%',
  },
  itemContainer: {
    borderRadius: 8,
    height: width,
    margin: 8,
    width,
  },
  itemTitle: {
    color: COLORS.white,
    ...fontStylesCatalog.RProBold_20,
  },
  itemTitleContainer: {
    backgroundColor: COLORS.blackTransparent02,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    bottom: 0,
    height: 28,
    justifyContent: 'center',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
  },
});

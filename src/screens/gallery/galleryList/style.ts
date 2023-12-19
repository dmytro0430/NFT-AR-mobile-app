import { COLORS, fontStylesCatalog } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.grayTransparent024,
    borderRadius: 8,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 8,
    padding: 8,
  },
  inputContainer: {
    color: COLORS.gray,
    flex: 1,
    paddingLeft: 8,
    ...fontStylesCatalog.RLight_17,
  },
  searchIcon: {
    height: 17,
    width: 17,
  },
});

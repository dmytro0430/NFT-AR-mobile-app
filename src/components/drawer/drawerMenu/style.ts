import { COLORS, fontStylesCatalog } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: 'space-between',
  },
  logoutContainer: {
    marginBottom: 32,
  },
  logoutTitle: {
    ...fontStylesCatalog.RProBold_20,
    color: COLORS.white,
    flex: 1,
    textAlign: 'center',
  },
  topContainer: {
    marginTop: 50,
  },
  versionTitle: {
    ...fontStylesCatalog.RLight_14,
    color: COLORS.white,
    marginBottom: 16,
    textAlign: 'center',
  },
});

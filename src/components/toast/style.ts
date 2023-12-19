import { COLORS, fontStylesCatalog } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  blur: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
  },
  text: {
    ...fontStylesCatalog.RProBold_14,
    color: COLORS.white,
    textAlign: 'center',
  },
  toastContainer: {
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    width: 100,
  },
});

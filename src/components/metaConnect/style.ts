import { fontStylesCatalog } from '@theme';
import { relativeHeight } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bottomButton: {
    marginTop: relativeHeight(45),
    width: '100%',
  },
  buttomImage: {
    height: relativeHeight(40),
    marginRight: 10,
    width: relativeHeight(40),
  },
  meta: {
    ...fontStylesCatalog.TD_23,
  },
});

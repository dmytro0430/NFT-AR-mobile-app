import { COLORS } from '@theme';
import { relativeHeight, relativeWidth } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttomStyleLeft: {
    alignItems: 'center',
    height: relativeWidth(30),
    justifyContent: 'center',
    marginRight: 12,
    width: relativeWidth(30),
  },
  buttomStyleRight: {
    alignItems: 'center',
    height: relativeWidth(30),
    justifyContent: 'center',
    marginLeft: relativeWidth(18),
    marginRight: 8,
    width: relativeWidth(30),
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    height: relativeHeight(20),
    tintColor: COLORS.white,
    width: relativeHeight(20),
  },
});

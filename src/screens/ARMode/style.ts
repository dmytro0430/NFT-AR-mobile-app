import { COLORS, fontStylesCatalog } from '@theme';
import { relativeHeight, relativeWidth, width } from '@utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  actionsButtons: {
    flex: 1,
    height: 64,
    marginHorizontal: 16,
  },
  actionsButtonsTitle: {
    ...fontStylesCatalog.RProBold_20,
    marginLeft: 6,
  },
  backButton: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    width: 50,
    zIndex: 1,
  },
  backImage: {
    height: 36,
    width: 36,
  },
  backImageCross: {
    height: 18,
    width: 18,
  },
  buttonImage: {
    height: relativeHeight(24),
    width: relativeWidth(24),
  },
  container: {
    flex: 1,
  },
  containerButtons: {
    alignItems: 'center',
    bottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  containerIOS: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  loader: {
    alignItems: 'center',
    position: 'absolute',
    top: 16,
    width: '100%',
    zIndex: 10,
  },
  monsterContainer: {
    alignItems: 'center',
    bottom: 0,
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 1001,
  },
  monsterImage: {
    height: width / 1.6,
    width: width / 1.6,
  },
  recordImage: {
    height: 64,
    width: 64,
  },
  screenshotButton: {
    position: 'absolute',
    right: 24,
  },
  screenshotImage: {
    height: 48,
    width: 48,
  },
});

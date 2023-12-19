import { Linking } from 'react-native';
import { Dimensions } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {
  checkMultiple,
  PERMISSIONS,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
export const { height, width } = Dimensions.get('screen');

const MODEL_HEIGHT = 852;
const MODEL_WIDTH = 393;

export const relativeHeight = (heightSize: number): number =>
  height * (heightSize / MODEL_HEIGHT);

export const relativeWidth = (widthSize: number): number =>
  width * (widthSize / MODEL_WIDTH);

export const sortByTitle = (arr: any, isAsc?: boolean) => {
  arr.sort((a: any, b: any) => {
    const titleA = a?.title.toUpperCase();
    const titleB = b?.title.toUpperCase();

    if (titleA < titleB) {
      return isAsc ? -1 : 1;
    }
    if (titleA > titleB) {
      return isAsc ? 1 : -1;
    }

    return 0;
  });

  return arr;
};

export const requestCameraAndMicrophonePermission = async () => {
  try {
    const statuses = await checkMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.MICROPHONE,
    ]);

    if (
      statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.DENIED ||
      statuses[PERMISSIONS.IOS.MICROPHONE] === RESULTS.DENIED
    ) {
      await requestMultiple([
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.IOS.MICROPHONE,
      ]);
    }
  } catch (e) {
    /* empty */
  }
};

export const isObjectEmpty = (obj: object) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const previewAsset = async (url: string) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: 'black',
        preferredControlTintColor: 'white',
        readerMode: true,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: false,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: false,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        headers: {
          'my-custom-header': 'my custom header value',
        },
      });
    } else Linking.openURL(url);
  } catch (error) {
    console.error(error);
  }
};

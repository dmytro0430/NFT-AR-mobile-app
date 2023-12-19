import { INIT_APP_SAGA } from '@actionTypes';
import { replace } from '@navigation';
import { RootStackScreens } from '@navigation';
import { getMetaMaskData } from '@selectors';
import { requestCameraAndMicrophonePermission } from '@utils';
import { call, select, takeLatest } from 'redux-saga/effects';

function* handleInitFetching() {
  try {
    const metaMask: string | null = yield select(getMetaMaskData);

    yield call(requestCameraAndMicrophonePermission);
    if (metaMask === null) {
      yield call(replace, RootStackScreens.auth);
      return;
    }
    yield call(replace, RootStackScreens.rootHome);
  } catch (err) {
    yield call(replace, RootStackScreens.rootHome);
  }
}

export function* initAppSaga() {
  yield takeLatest(INIT_APP_SAGA, handleInitFetching);
}

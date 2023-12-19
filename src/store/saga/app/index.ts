import { all } from 'redux-saga/effects';

import { initAppSaga } from './initAppSaga';

export default function* appSaga() {
  yield all([initAppSaga()]);
}

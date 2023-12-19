import { all } from 'redux-saga/effects';

import appSaga from './app';
import openseaSaga from './opensea';

export function* rootSaga() {
  yield all([appSaga(), openseaSaga()]);
}

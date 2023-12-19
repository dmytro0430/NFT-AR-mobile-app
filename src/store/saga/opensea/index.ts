import { all } from 'redux-saga/effects';

import { getAnNFTSaga } from './getAnNFT';
import { getNFTsSaga } from './getNFTs';

export default function* openseaSaga() {
  yield all([getAnNFTSaga(), getNFTsSaga()]);
}

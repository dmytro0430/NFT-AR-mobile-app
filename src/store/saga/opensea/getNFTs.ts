import { setNFTsDataAction } from '@actions';
import { GET_NFTS_DATA } from '@actionTypes';
import { Api } from '@api';
import { call, put, takeLatest } from 'redux-saga/effects';

function* getNFTs({
  payload,
}: {
  payload: { address: string; chain: string; params: object };
}) {
  try {
    const {
      data: { nfts },
    } = yield call(Api.OpenSeaApi.retrieveNFTs, payload);

    yield put(setNFTsDataAction(nfts));
  } catch (err) {
    console.log(err);
  }
}

export function* getNFTsSaga() {
  yield takeLatest(GET_NFTS_DATA, getNFTs);
}

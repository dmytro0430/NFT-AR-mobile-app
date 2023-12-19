import { setAnNFTDataAction } from '@actions';
import { GET_NFT_DATA } from '@actionTypes';
import { Api } from '@api';
import { call, put, takeLatest } from 'redux-saga/effects';

function* getAnNFT({
  payload,
}: {
  payload: {
    address: string;
    chain: string;
    identifier: string;
    imageUrl: string;
  };
}) {
  try {
    const {
      data: { nft },
    } = yield call(Api.OpenSeaApi.getAnNFT, payload);

    yield put(setAnNFTDataAction({ ...nft, imageUrl: payload.imageUrl }));
  } catch (err) {
    console.log(err);
  }
}

export function* getAnNFTSaga() {
  // @ts-ignore
  yield takeLatest(GET_NFT_DATA, getAnNFT);
}

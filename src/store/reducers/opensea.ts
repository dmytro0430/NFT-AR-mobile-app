import { SET_LOGOUT, SET_NFT_DATA, SET_NFTS_DATA } from '@actionTypes';

const initialState = {
  nftsData: null,
  anNFTData: null,
};

export const opensea = (state = initialState, { type, payload }: any = {}) => {
  switch (type) {
    case SET_NFTS_DATA: {
      return {
        ...state,
        nftsData: payload,
      };
    }
    case SET_NFT_DATA: {
      return {
        ...state,
        anNFTData: payload,
      };
    }
    case SET_LOGOUT: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

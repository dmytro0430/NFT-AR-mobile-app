import {
  GET_NFT_DATA,
  GET_NFTS_DATA,
  SET_NFT_DATA,
  SET_NFTS_DATA,
} from '@actionTypes';
import { createAction } from '@utils';

export const setNFTsDataAction = (payload: any) =>
  createAction(SET_NFTS_DATA, payload);

export const getNFTsDataAction = (params: object) =>
  createAction(GET_NFTS_DATA, params);

export const setAnNFTDataAction = (payload: any) =>
  createAction(SET_NFT_DATA, payload);

export const getAnNFTDataAction = (params: object) =>
  createAction(GET_NFT_DATA, params);

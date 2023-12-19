import { SET_METAMASK_BALANCE, SET_METAMASK_DATA } from '@actionTypes';
import { createAction } from '@utils';

export const setMetaMaskDataAction = (payload: any) =>
  createAction(SET_METAMASK_DATA, payload);

export const setMetaMaskBalanceAction = (payload: any) =>
  createAction(SET_METAMASK_BALANCE, payload);

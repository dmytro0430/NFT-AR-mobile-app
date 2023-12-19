import {
  INIT_APP_SAGA,
  SET_LANGUAGE,
  SET_LOGOUT,
  SET_SHOW_SPLASH,
} from '@actionTypes';
import { createAction } from '@utils';

export const setLanguageAction = (payload: any) =>
  createAction(SET_LANGUAGE, payload);

export const initAppSagaAction = () => createAction(INIT_APP_SAGA);
export const setLogOutAction = () => createAction(SET_LOGOUT);
export const setShowSplash = (payload: boolean) =>
  createAction(SET_SHOW_SPLASH, payload);

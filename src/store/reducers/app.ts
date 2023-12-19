import { SET_LANGUAGE, SET_LOGOUT, SET_SHOW_SPLASH } from '@actionTypes';
import { LANGUAGES } from '@constants';

const initialState = {
  language: LANGUAGES.EN,
  showSplash: true,
};

export const app = (state = initialState, { type, payload }: any = {}) => {
  switch (type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        language: payload,
      };
    }
    case SET_SHOW_SPLASH: {
      return {
        ...state,
        showSplash: payload,
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

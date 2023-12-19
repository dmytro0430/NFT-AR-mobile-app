import {
  SET_LOGOUT,
  SET_METAMASK_BALANCE,
  SET_METAMASK_DATA,
} from '@actionTypes';

const initialState = {
  balance: null,
  metamaskData: null,
};

export const metamask = (state = initialState, { type, payload }: any = {}) => {
  switch (type) {
    case SET_METAMASK_DATA: {
      return {
        ...state,
        metamaskData: payload,
      };
    }
    case SET_METAMASK_BALANCE: {
      return {
        ...state,
        balance: payload,
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

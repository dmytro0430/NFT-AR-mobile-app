import { combineReducers } from '@reduxjs/toolkit';

import { app } from './app';
import { metamask } from './metamask';
import { opensea } from './opensea';

export const rootReducer = combineReducers({
  app,
  metamask,
  opensea,
});

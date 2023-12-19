import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const persitingAppReducer = createBlacklistFilter('app', ['showSplash']);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app', 'metamask', 'opensea'],
  transforms: [persitingAppReducer],
  stateReconciler: autoMergeLevel2,
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

const persist = persistStore(store);

// A nice way to clear AsyncStorage while
// persist.purge();

export { persist, store };

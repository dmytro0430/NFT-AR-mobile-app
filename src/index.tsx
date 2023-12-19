import 'react-native-gesture-handler';
import './localizations';

import { CustomToast } from '@components';
import { RootStack } from '@navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persist, store } from './store';

const toastConfig = {
  customToast: ({ text1 }: { text1: string }) => <CustomToast text={text1} />,
};

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist} loading={null}>
        <SafeAreaProvider>
          <RootStack />
          <Toast config={toastConfig} />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default Root;

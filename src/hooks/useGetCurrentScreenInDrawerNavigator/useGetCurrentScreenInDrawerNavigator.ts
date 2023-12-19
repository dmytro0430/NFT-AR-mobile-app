import { getCurrentScreen } from '@navigation';
import { useEffect, useState } from 'react';

export const useGetCurrentScreenInDrawerNavigator = (route: any) => {
  const [currentScreen, setCurrentScreen] = useState(getCurrentScreen());

  useEffect(() => {
    setCurrentScreen(getCurrentScreen());
  }, [route]);

  return currentScreen;
};

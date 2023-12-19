import { useHeaderHeight } from '@react-navigation/elements';
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');

export const useHeaderHeightHook = () => {
  const headerHeight = useHeaderHeight();
  const { bottom, top } = useSafeAreaInsets();
  const [headerHeightState, setHeaderHeightState] = useState<number>(0);

  const getHeight = () => {
    if (headerHeightState !== headerHeight) {
      setHeaderHeightState(headerHeight);
    }
  };
  useEffect(() => getHeight(), [headerHeightState, headerHeight]);

  return height - headerHeightState - bottom - top - 20;
};

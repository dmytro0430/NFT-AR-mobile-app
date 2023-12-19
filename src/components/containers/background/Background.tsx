import { ReactNode } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

export const Background = ({
  children,
}: {
  children: ReactNode;
  isScroll?: boolean;
}) => (
  <SafeAreaView>
    {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
    {children}
  </SafeAreaView>
);

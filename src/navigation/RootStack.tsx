import { FakeSplash, NavigationWrapper } from '@components';
import { RootStackScreens } from '@navigation';
import {
  CommonActions,
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer,
  StackActions,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ARModeScreen,
  AuthScreen,
  GalleryDetailsScreen,
  SplashScreen,
} from '@screens';
import { analyticsLogScreenEvent } from '@utils';
import { useRef } from 'react';

import { RootHomeStack } from './drawer';

const Stack = createStackNavigator();

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params);
  }
};

export const replace = (stack: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(stack, params));
  }
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const logout = () => {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: RootStackScreens.auth,
        },
      ],
    }),
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const getCurrentScreen = () => {
  return navigationRef.current.getCurrentRoute().name;
};

export const RootStack = () => {
  const routeNameRef: any = useRef();

  const forFade = ({ current }) => ({
    cardStyle: { opacity: current.progress },
  });

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = getCurrentScreen();
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getCurrentScreen();

        if (previousRouteName !== currentRouteName) {
          await analyticsLogScreenEvent(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}
      theme={MyTheme}>
      <NavigationWrapper>
        <FakeSplash>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
              cardStyleInterpolator: forFade,
            }}>
            <Stack.Screen
              name={RootStackScreens.splash}
              component={SplashScreen}
            />
            <Stack.Screen name={RootStackScreens.auth} component={AuthScreen} />
            <Stack.Screen
              name={RootStackScreens.rootHome}
              component={RootHomeStack}
            />
            <Stack.Screen
              name={RootStackScreens.ARMode}
              // @ts-ignore
              component={ARModeScreen}
            />
            <Stack.Screen
              name={RootStackScreens.details}
              // @ts-ignore
              component={GalleryDetailsScreen}
              options={{
                headerShown: true,
              }}
            />
          </Stack.Navigator>
        </FakeSplash>
      </NavigationWrapper>
    </NavigationContainer>
  );
};

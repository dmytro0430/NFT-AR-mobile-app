import { DrawerStackScreens } from '@navigation';
import { TabStack } from '@navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { ARModeScreen, GalleryDetailsScreen } from '@screens';

const AppDrawerStack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: { opacity: current.progress },
});

export const DrawerStack = () => {
  return (
    <AppDrawerStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        cardStyleInterpolator: forFade,
      }}>
      <AppDrawerStack.Screen
        name={DrawerStackScreens.tab}
        component={TabStack}
      />
      <AppDrawerStack.Screen
        name={DrawerStackScreens.ARMode}
        component={ARModeScreen}
      />
      <AppDrawerStack.Screen
        name={DrawerStackScreens.galleryDetails}
        component={GalleryDetailsScreen}
        options={{
          headerShown: true,
        }}
      />
    </AppDrawerStack.Navigator>
  );
};

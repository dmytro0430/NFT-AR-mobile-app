import { TabBar } from '@components';
import { TabStackScreens } from '@navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GalleryListScreen, WalletScreen, WeAreScreen } from '@screens';

const Tab = createBottomTabNavigator();

export const TabStack = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName={TabStackScreens.gallery}>
      <Tab.Screen name={TabStackScreens.weAre} component={WeAreScreen} />
      <Tab.Screen
        name={TabStackScreens.gallery}
        component={GalleryListScreen}
      />
      <Tab.Screen name={TabStackScreens.wallet} component={WalletScreen} />
    </Tab.Navigator>
  );
};

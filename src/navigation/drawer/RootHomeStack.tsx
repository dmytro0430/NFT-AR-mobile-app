import { DrawerMenu } from '@components';
import { useGetCurrentScreenInDrawerNavigator } from '@hooks';
import { RootHomeStackScreens, TabStackScreens } from '@navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerStack } from './DrawerStack';

const Drawer = createDrawerNavigator();

export const RootHomeStack = ({ route }: any) => {
  const currentScreen = useGetCurrentScreenInDrawerNavigator(route);

  return (
    <Drawer.Navigator
      defaultStatus="closed"
      screenOptions={{
        drawerPosition: 'left',
        headerShown: false,
        drawerType: 'front',
        swipeEnabled: [
          TabStackScreens.wallet,
          TabStackScreens.weAre,
          TabStackScreens.gallery,
        ].includes(currentScreen),
      }}
      // @ts-ignore
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen
        name={RootHomeStackScreens.drawer}
        component={DrawerStack}
      />
    </Drawer.Navigator>
  );
};

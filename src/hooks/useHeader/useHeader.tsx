import { Button, TouchableImage } from '@components';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import back from '../../../assets/icons/back/back.png';
import menu from '../../../assets/icons/menu/menu.png';
import { styles } from './style';

export const useHeader = ({
  title,
  isGoBackIcon = true,
  isOpenDrawerIcon = false,
  headerLeft,
  headerRight,
  headerTitle,
}: any) => {
  const navigation: any = useNavigation();
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  const headerLeftDefault = () => {
    if (isOpenDrawerIcon) {
      return (
        <TouchableImage
          buttonStyle={styles.leftMenu}
          buttonImage={menu}
          onPress={navigation.openDrawer}
          imageStyle={styles.burger}
        />
      );
    }

    if (navigation.canGoBack() && isGoBackIcon) {
      return (
        <Button
          buttonStyle={styles.leftMenu}
          buttonImage={back}
          title={t('buttons.back')}
          onPress={navigation.goBack}
          titleStyle={styles.titleStyle}
          imageStyle={styles.immageStyle}
        />
      );
    }

    return <></>;
  };

  const headerTitleDefault = () => <Text style={styles.title}>{title}</Text>;

  const headerRightDefault = () => {
    return <></>;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: null,
      headerTitle: headerTitle || headerTitleDefault,
      headerLeft: headerLeft || headerLeftDefault,
      headerRight: headerRight || headerRightDefault,
      headerStyle: [styles.container, { height: 53 + insets.top }],
      headerTitleAlign: 'center',
    });
  }, [
    navigation,
    title,
    headerLeft,
    headerRight,
    headerTitle,
    isOpenDrawerIcon,
    isGoBackIcon,
  ]);
};

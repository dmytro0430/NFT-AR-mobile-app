import { setLogOutAction } from '@actions';
import { TouchableText } from '@components';
import { LINKS } from '@constants';
import { logout } from '@navigation';
import { useTranslation } from 'react-i18next';
import { Linking, SafeAreaView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { version } from '../../../../package.json';
import { styles } from './style';

export const DrawerMenu = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setLogOutAction());
    logout();
  };

  const openMarket = () => Linking.openURL(LINKS.MARKET);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableText
            onPress={openMarket}
            title={t('buttons.opensea')}
            textStyle={styles.logoutTitle}
          />
        </View>
        <View>
          <TouchableText
            onPress={handleLogOut}
            title={t('buttons.logOut')}
            textStyle={styles.logoutTitle}
            buttonStyle={styles.logoutContainer}
          />
          <Text style={styles.versionTitle}>{version}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

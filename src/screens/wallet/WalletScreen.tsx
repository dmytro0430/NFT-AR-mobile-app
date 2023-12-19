import { setLogOutAction, setShowSplash } from '@actions';
import Jazzicon from '@castle-studios/react-native-jazzicon';
import { Background, Button } from '@components';
import { useHeader } from '@hooks';
import { logout } from '@navigation';
import Clipboard from '@react-native-clipboard/clipboard';
import { BlurView } from '@react-native-community/blur';
import { getMetaMaskBalance, getMetaMaskData } from '@selectors';
import { hapticPress, relativeHeight } from '@utils';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './style';

export const WalletScreen = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const address = useSelector(getMetaMaskData);
  const balance = useSelector(getMetaMaskBalance);

  useHeader({ title: t('headers.wallet'), isOpenDrawerIcon: true });

  const handlePress = () => {
    dispatch(setLogOutAction());
    dispatch(setShowSplash(false));
    logout();
  };

  const handleClip = () =>
    hapticPress(() => {
      Clipboard.setString(address);
      Toast.show({
        type: 'customToast',
        text1: t('toast.copy'),
        position: 'bottom',
        visibilityTime: 2000,
        bottomOffset: relativeHeight(200),
      });
    });

  return (
    <Background>
      <View style={styles.wrapper}>
        <View style={styles.topContainer}>
          <BlurView style={styles.blur} blurType="dark" blurAmount={1} />
          <Jazzicon size={110} address={address} />
          <Button
            title={t('buttons.logOut')}
            onPress={handlePress}
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{balance || '0'} ETH</Text>
            <TouchableOpacity onPress={handleClip} style={styles.touch}>
              <Text
                style={styles.text}
                ellipsizeMode="middle"
                numberOfLines={1}>
                {address}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

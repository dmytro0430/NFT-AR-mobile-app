import { setMetaMaskBalanceAction, setMetaMaskDataAction } from '@actions';
import MetaMaskSDK from '@metamask/sdk';
import { navigate, RootStackScreens } from '@navigation';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linking } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import { useDispatch } from 'react-redux';

import fox from '../../../assets/images/fox/Fox.png';
import { Button } from '../buttons';
import { styles } from './style';

export const sdk = new MetaMaskSDK({
  openDeeplink: (link: string) => {
    Linking.openURL(link);
  },
  timer: BackgroundTimer,
  enableDebug: true,
  dappMetadata: {
    url: 'ODLABS',
    name: 'ODLABS',
  },
  storage: {
    enabled: true,
  },
});

export const MetaConnect = () => {
  const { t } = useTranslation();
  const [ethereum] = useState(sdk.getProvider());
  const [connected, setConnected] = useState<boolean>(false);
  const [provider] = useState(new ethers.providers.Web3Provider(ethereum));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!connected) return;
    navigate(RootStackScreens.rootHome);
  }, [connected]);

  const getBalance = async (address: string) => {
    if (!address) return;
    const bal = await provider.getBalance(address);
    dispatch(setMetaMaskBalanceAction(ethers.utils.formatEther(bal)));
  };

  const connect = async () => {
    try {
      const result = (await ethereum?.request({
        method: 'eth_requestAccounts',
      })) as string[];
      console.log('RESULT', result?.[0]);
      dispatch(setMetaMaskDataAction(result?.[0]));
      setConnected(true);
      getBalance(result?.[0]);
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <Button
      onPress={connect}
      title={t('buttons.metamask')}
      titleStyle={styles.meta}
      buttonStyle={styles.bottomButton}
      buttonImage={fox}
      imageStyle={styles.buttomImage}
    />
  );
};

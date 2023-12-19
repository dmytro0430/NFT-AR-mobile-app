import { initAppSagaAction } from '@actions';
import { useEffect } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import bgPic from '../../../assets/images/background/background.png';
import { styles } from './style';

export const SplashScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigation) {
      const handleInitApp = () => {
        setTimeout(() => dispatch(initAppSagaAction()), 150);
      };

      handleInitApp();
    }
  }, [navigation]);

  return <Image source={bgPic} style={styles.image} />;
};

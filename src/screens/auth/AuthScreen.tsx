import { Background, Button, MetaConnect, StepList } from '@components';
import { BlurView } from '@react-native-community/blur';
import { hapticPress } from '@utils';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, Text, View } from 'react-native';

import { EXAMPLE } from './constants';
import { styles } from './style';

export const AuthScreen = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNavToARMode = () =>
    hapticPress(() =>
      Linking.openURL(
        EXAMPLE.find(item => item.id === currentIndex.toString()).link,
      ),
    );

  return (
    <Background>
      <View style={styles.wrapper}>
        <View style={styles.topContainer}>
          <StepList data={EXAMPLE} width={286} callback={setCurrentIndex} />
          <Button
            onPress={handleNavToARMode}
            title={t('buttons.tryMe')}
            titleStyle={styles.try}
            buttonStyle={styles.topButton}
          />
        </View>
        <View style={styles.bottomContainer}>
          <BlurView style={styles.blur} blurType="dark" blurAmount={20} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{t('authScreen.title')}</Text>
            <Text style={styles.subtitle}>{t('authScreen.subtitle')}</Text>
          </View>
          <MetaConnect />
        </View>
      </View>
    </Background>
  );
};

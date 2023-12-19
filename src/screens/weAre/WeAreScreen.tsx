import { Background, LogoSVG, TouchableText } from '@components';
import { LINKS } from '@constants';
import { useHeader } from '@hooks';
import { useTranslation } from 'react-i18next';
import { Linking, Text, View } from 'react-native';

import instagram from '../../../assets/icons/instagram/instagram.png';
import twitter from '../../../assets/icons/twitter/twitter.png';
import { styles } from './style';

export const WeAreScreen = () => {
  const { t } = useTranslation();

  useHeader({ title: t('headers.weAre'), isOpenDrawerIcon: true });

  const handleOpenURL = (url: string) => async () => {
    await Linking.openURL(url);
  };

  return (
    <Background>
      <View style={styles.logoContainer}>
        <LogoSVG />
      </View>
      <View style={styles.container}>
        <Text style={styles.topTitle}>{t('weAre.whoWe')}</Text>
        <Text style={styles.contentTitle}>
          <Text style={styles.boldTitle}>{t('weAre.ooLabs')}</Text>
          {t('weAre.aCompanyBy')}
          <Text style={styles.boldTitle}>{t('weAre.adto')}</Text>
          {t('weAre.andFashion')}
          <Text style={styles.boldTitle}>{t('weAre.od')}</Text>
          {t('weAre.point')}
        </Text>
        <Text style={styles.learnMoreTitle}>{t('weAre.learnMore')}</Text>
        <TouchableText
          onPress={handleOpenURL(LINKS.ABOUT)}
          title={t('weAre.about')}
          textStyle={styles.links}
        />
        <TouchableText
          onPress={handleOpenURL(LINKS.NEWS)}
          title={t('weAre.news')}
          textStyle={styles.links}
        />
        <View style={styles.bottomContainer}>
          <TouchableText
            buttonStyle={styles.socialContainer}
            buttonImage={instagram}
            onPress={handleOpenURL(LINKS.INSTAGRAM)}
            title={t('weAre.instagram')}
            textStyle={styles.social}
          />
          <TouchableText
            buttonStyle={styles.socialContainer}
            buttonImage={twitter}
            onPress={handleOpenURL(LINKS.TWITTER)}
            title={t('weAre.twitter')}
            textStyle={styles.social}
          />
        </View>
      </View>
    </Background>
  );
};

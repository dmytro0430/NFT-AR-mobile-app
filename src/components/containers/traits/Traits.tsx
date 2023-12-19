/* eslint-disable react-native/no-inline-styles */
import { AnimatedView, Button } from '@components';
import { TRAITS_COLORS } from '@constants';
import { ITrait } from '@interfaces';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import arrow from '../../../../assets/icons/back/back.png';
import { styles } from './style';

export const Traits = ({ data }: { data: ITrait[] }) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const renderTraits = ({ traitType, value }: ITrait, index: number) => {
    const color = TRAITS_COLORS[value];
    return (
      <View key={index} style={styles.traitContainer}>
        <Text style={styles.traitType}>{traitType}</Text>
        <Text style={[styles.traitType, { flex: 0 }]}>:</Text>
        <Text style={[styles.traitValue, { color: color }]}>{value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Button
        title={t('buttons.components')}
        onPress={() => setShow(!show)}
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.buttonStyle}
        buttonImage={arrow}
        imageStyle={[
          styles.buttonImage,
          { transform: [{ rotate: show ? '90deg' : '-90deg' }] },
        ]}
      />
      <AnimatedView show={show}>{data.map(renderTraits)}</AnimatedView>
    </View>
  );
};

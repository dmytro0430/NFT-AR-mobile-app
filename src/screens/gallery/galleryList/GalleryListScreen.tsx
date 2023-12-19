import {
  Background,
  GalleryHeaderButtons,
  NFTList,
  TouchableImage,
} from '@components';
import { LINKS, MOCK_BUY_BUTTON } from '@constants';
import { useFilterModal, useGetNFTs, useHeader } from '@hooks';
import { DrawerStackScreens } from '@navigation';
import { useIsFocused } from '@react-navigation/native';
import { COLORS } from '@theme';
import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, TextInput, View } from 'react-native';

import search from '../../../../assets/icons/search/search.png';
import settings from '../../../../assets/icons/settings/settings.png';
import sort from '../../../../assets/icons/sort/sort.png';
import sortDown from '../../../../assets/icons/sortDown/sortDown.png';
import { styles } from './style';

export const GalleryListScreen = ({ navigation }: any) => {
  const [value, onChangeValue] = useState('');
  const [isSortByAdc, setIsSortByAdc] = useState(true);
  const inputRef: any = useRef();
  const { t } = useTranslation();
  const deferredValue = useDeferredValue(value);

  const isFocused = useIsFocused();

  useEffect(() => {
    const ifUnfocused = () => {
      if (isFocused) return;
      onChangeValue('');
    };
    ifUnfocused();
  }, [isFocused]);

  const data = useGetNFTs([], isSortByAdc);

  const handleSetIsSortByAdc = () => {
    setIsSortByAdc(val => !val);
  };

  const { renderModal, handleShowModal } = useFilterModal();

  useHeader({
    title: t('headers.gallery'),
    isOpenDrawerIcon: true,
    headerRight: () => (
      <GalleryHeaderButtons
        imageRight={settings}
        imageLeft={isSortByAdc ? sort : sortDown}
        onPressLeft={handleSetIsSortByAdc}
        onPressRight={handleShowModal}
      />
    ),
  });

  const handleNavToARMode = (id: string) => {
    if (MOCK_BUY_BUTTON.id === id) {
      Linking.openURL(LINKS.MARKET);
    } else {
      navigation.navigate(DrawerStackScreens.galleryDetails, id);
    }
  };

  const handleInput = () => {
    inputRef.current.focus();
  };

  const list = useMemo(() => {
    return data.filter((item: any) =>
      item.title.toLowerCase().includes(deferredValue.toLowerCase()),
    );
  }, [deferredValue, data]);

  return (
    <Background>
      <View style={styles.container}>
        <TouchableImage
          buttonImage={search}
          onPress={handleInput}
          imageStyle={styles.searchIcon}
        />
        <TextInput
          ref={inputRef}
          style={styles.inputContainer}
          onChangeText={onChangeValue}
          value={value}
          placeholderTextColor={COLORS.gray}
          placeholder={t('placeholders.search')}
        />
      </View>
      <NFTList data={list} onPress={handleNavToARMode} />
      {renderModal()}
    </Background>
  );
};

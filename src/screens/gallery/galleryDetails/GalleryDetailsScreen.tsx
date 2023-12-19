import { Background, Button, GalleryHeaderButtons, Traits } from '@components';
import { materials, MODEL_COLORS } from '@constants';
import { useGetNFT, useHeader, useHeaderHeightHook } from '@hooks';
import { DrawerStackScreens, navigate } from '@navigation';
import { isObjectEmpty } from '@utils';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Image, Share, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import RNFS from 'react-native-fs';
import { ScrollView } from 'react-native-gesture-handler';

import share from '../../../../assets/icons/shareIcon/Share.png';
import { styles } from './style';

export const GalleryDetailsScreen = ({
  route: { params },
}: {
  route: { params: string };
}) => {
  const { t } = useTranslation();
  const height = useHeaderHeightHook();
  const nft = useGetNFT({ id: params, mockData: [] });
  const [isLoading, setIsLoading] = useState(true);

  const nftData: any = nft;
  const getImage = () =>
    typeof nftData.imageUrl === 'number'
      ? nftData.imageUrl
      : { uri: nftData.imageUrl };

  const getImageLink = () =>
    typeof nftData.imageUrl === 'number'
      ? Image.resolveAssetSource(nftData.imageUrl).uri
      : nftData.imageUrl;

  const handlePress = () => {
    navigate(DrawerStackScreens.ARMode, {
      model: nftData?.model,
      scale: nftData?.scale,
      type: nftData?.type,
      image: getImageLink(),
    });
  };

  const handleOpenShareActionSheet = async () => {
    try {
      const { action, activityType }: any = await Share.share({
        url: getImageLink(),
      });

      if (action === Share.sharedAction) {
        if (activityType !== null) {
          Alert.alert(t('alerts.success'), t('alerts.sharePhoto'));
        }
      }
    } catch (err) {
      Alert.alert(t('alerts.oops'), t('alerts.wrong') + err);
    }
  };

  useHeader({
    title: t('headers.gallery'),
    headerRight: () => (
      <GalleryHeaderButtons
        imageLeft={share}
        onPressLeft={handleOpenShareActionSheet}
      />
    ),
  });

  const handleUnlink = async (link: string) => {
    try {
      await RNFS.unlink(link);
    } catch (e) {
      /* empty */
    }
  };

  const handleCopy = async () => {
    try {
      await RNFS.copyFile(
        RNFS.MainBundlePath + '/scene.bin',
        RNFS.LibraryDirectoryPath + '/scene.bin',
      );
    } catch (e) {
      /* empty */
    }
  };

  useEffect(() => {
    const handleLoadModel = async () => {
      try {
        setIsLoading(true);
        const materialsCopy = JSON.parse(JSON.stringify(materials));

        nftData?.traits?.forEach(({ value, traitType }: any) => {
          const curTraitType = traitType.toLowerCase().split(' ').join('_');

          const curMaterials = materialsCopy.find(
            ({ name }: any) => name.toLowerCase() === curTraitType,
          );

          if (curMaterials?.pbrMetallicRoughness) {
            curMaterials.pbrMetallicRoughness.baseColorFactor = MODEL_COLORS[
              value
            ] || [1.0, 1.0, 1.0, 1.0];
          }
        });

        await handleUnlink(RNFS.LibraryDirectoryPath + '/scene.bin');
        await handleUnlink(RNFS.LibraryDirectoryPath + '/scene.gltf');

        await handleCopy();

        const file = await RNFS.readFile(RNFS.MainBundlePath + '/scene.gltf');

        const curFile = JSON.parse(file);

        curFile.materials = materialsCopy;

        await RNFS.writeFile(
          RNFS.LibraryDirectoryPath + '/scene.gltf',
          JSON.stringify(curFile),
        );
      } finally {
        setIsLoading(false);
      }
    };

    handleLoadModel();
  }, [nftData]);

  return (
    <Background>
      <View style={styles.wrapper}>
        <ScrollView
          style={{ maxHeight: height }}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={styles.title}>{nftData.name}</Text>
            <FastImage
              source={getImage()}
              style={styles.picture}
              resizeMode={FastImage.resizeMode.contain}
            />
            {nftData?.traits && <Traits data={nftData.traits} />}
          </View>
        </ScrollView>
        <Button
          isLoading={isLoading}
          onPress={handlePress}
          title={t('buttons.viewInAr')}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          disabled={isObjectEmpty(nftData) || isLoading}
        />
      </View>
    </Background>
  );
};

import { ARModeScene, Button, TouchableImage } from '@components';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { COLORS } from '@theme';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  Alert,
  Animated,
  SafeAreaView,
  Share,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import camera from '../../../assets/icons/camera/camera.png';
import cross from '../../../assets/icons/cross/cross.png';
import rec from '../../../assets/icons/rec/rec.png';
import reload from '../../../assets/icons/reload/reload.png';
import save from '../../../assets/icons/save/save.png';
import share from '../../../assets/icons/share/share.png';
import stop from '../../../assets/icons/stop/stop.png';
import monster from '../../../assets/images/lulu/monster.png';
import { TYPES_RECORDED } from './constants';
import { styles } from './style';

export const ARModeScreen = ({ navigation, route }: any) => {
  const [isRecordingVideo, setIsRecordingVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPreRecord, setIsPreRecord] = useState<boolean>(false);
  const [url, setUrl] = useState(null);
  const [type, setType] = useState(null);
  const ARNavigatorRef = useRef(null);

  const [run, setRun] = useState(false);
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const renderAnimation = () => {
      if (run) {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    };

    renderAnimation();
  }, [run]);

  const { t } = useTranslation();

  const renderErrorAlert = (err?: any) => {
    Alert.alert(t('alerts.oops'), t('alerts.wrong') + err);
  };

  const handleScreenshot = async () => {
    try {
      setIsLoading(true);
      const { success, url } = await ARNavigatorRef.current._takeScreenshot(
        `screenshot_${new Date().toISOString()}`,
        false,
      );

      if (success) {
        setUrl('file://' + url);
        setType(TYPES_RECORDED.PHOTO);
      } else {
        renderErrorAlert();
      }
    } catch (err) {
      renderErrorAlert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartVideoRecording = async () => {
    try {
      setIsLoading(true);
      setIsRecordingVideo(true);

      await ARNavigatorRef.current._startVideoRecording(
        `video_${new Date().toISOString()}`,
        false,
        (err: number) => {
          setIsRecordingVideo(false);
          renderErrorAlert(err);
        },
      );
    } catch (err) {
      renderErrorAlert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStopVideoRecording = async () => {
    try {
      setIsLoading(true);
      const { success, url, errorCode } =
        await ARNavigatorRef.current._stopVideoRecording();
      if (success) {
        setUrl('file://' + url);
        setType(TYPES_RECORDED.VIDEO);
      } else {
        renderErrorAlert(`Error code:${errorCode}`);
      }

      setIsRecordingVideo(false);
    } catch (err) {
      renderErrorAlert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetData = () => {
    setUrl(null);
    setType(null);
  };

  const handleSaveToGallery = async () => {
    try {
      setIsLoading(true);
      await CameraRoll.save(url);

      Alert.alert(
        t('alerts.success'),
        type === TYPES_RECORDED.PHOTO
          ? t('alerts.addPhoto')
          : t('alerts.addVideo'),
      );
      handleResetData();
    } catch (err) {
      renderErrorAlert(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenShareActionSheet = async () => {
    try {
      setIsLoading(true);
      const { action, activityType }: any = await Share.share({
        url,
      });

      if (action === Share.sharedAction) {
        if (activityType !== null) {
          Alert.alert(
            t('alerts.success'),
            type === TYPES_RECORDED.PHOTO
              ? t('alerts.sharePhoto')
              : t('alerts.shareVideo'),
          );
          handleResetData();
        }
      }
    } catch (err) {
      renderErrorAlert(err);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: RECORD_ERROR_UNKNOWN error patch
  const preRecord = async () => {
    try {
      await ARNavigatorRef.current._startVideoRecording(
        `video_${new Date().toISOString()}`,
        false,
        () => {},
      );
      await ARNavigatorRef.current._stopVideoRecording();
    } finally {
      setIsPreRecord(true);
    }
  };
  useEffect(() => {
    const onLoad = () => {
      setTimeout(preRecord, 500, ARNavigatorRef.current);
    };
    onLoad();
  }, []);

  return (
    <SafeAreaView style={styles.containerIOS}>
      <View style={styles.container}>
        {(!!isLoading || !isPreRecord) && (
          <ActivityIndicator
            size="small"
            color={COLORS.peach}
            style={styles.loader}
          />
        )}
        <TouchableImage
          buttonImage={type ? reload : cross}
          buttonStyle={styles.backButton}
          imageStyle={type ? styles.backImage : styles.backImageCross}
          onPress={type ? handleResetData : navigation.goBack}
        />
        <Animated.View
          style={[styles.monsterContainer, { opacity }]}
          pointerEvents="none">
          <FastImage
            source={monster}
            style={styles.monsterImage}
            resizeMode="contain"
          />
        </Animated.View>
        <ViroARSceneNavigator
          autofocus
          initialScene={{
            scene: () => (
              <ARModeScene
                model={route.params?.model}
                scale={route.params?.scale}
                image={route.params?.image}
                type={route.params?.type}
                setRun={setRun}
                setIsLoading={setIsLoading}
              />
            ),
          }}
          style={styles.container}
          ref={ARNavigatorRef}
        />
        <View style={styles.containerButtons}>
          {url ? (
            <>
              <Button
                disabled={isLoading}
                title={t('save')}
                onPress={handleSaveToGallery}
                buttonImage={save}
                buttonStyle={styles.actionsButtons}
                titleStyle={styles.actionsButtonsTitle}
                imageStyle={styles.buttonImage}
              />
              <Button
                disabled={isLoading}
                title={t('share')}
                onPress={handleOpenShareActionSheet}
                buttonImage={share}
                buttonStyle={styles.actionsButtons}
                titleStyle={styles.actionsButtonsTitle}
                imageStyle={styles.buttonImage}
              />
            </>
          ) : (
            <>
              <TouchableImage
                disabled={isLoading || !isPreRecord}
                buttonImage={isRecordingVideo ? stop : rec}
                imageStyle={styles.recordImage}
                onPress={
                  isRecordingVideo
                    ? handleStopVideoRecording
                    : handleStartVideoRecording
                }
              />
              <TouchableImage
                disabled={isLoading || !isPreRecord}
                buttonImage={camera}
                onPress={handleScreenshot}
                buttonStyle={styles.screenshotButton}
                imageStyle={styles.screenshotImage}
              />
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

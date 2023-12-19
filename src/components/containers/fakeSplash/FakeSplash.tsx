import { setShowSplash } from '@actions';
import { getShowSplash } from '@selectors';
import { ReactNode, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Video from 'react-native-video';
import { useDispatch, useSelector } from 'react-redux';

import bgPic from '../../../../assets/images/background/background.png';
import { styles } from './style';

const { width, height } = Dimensions.get('window');

export const FakeSplash = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const showSplash = useSelector(getShowSplash);
  const [paused, setPaused] = useState<boolean>(false);
  const translateY = useSharedValue(-140);

  const stopVideo = () => setPaused(!paused);
  const hideSplash = () => dispatch(setShowSplash(false));

  const animatedWrapperStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: -(width * 1.5 - width) / 2 },
      {
        translateY: withDelay(
          2000,
          withTiming(
            translateY.value,
            { duration: 1000, easing: Easing.ease },
            runOnJS(stopVideo),
          ),
        ),
      },
    ],
  }));

  const animatedVideoStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withDelay(
          2000,
          withTiming(
            -translateY.value,
            { duration: 1000, easing: Easing.ease },
            runOnJS(hideSplash),
          ),
        ),
      },
    ],
  }));

  useEffect(() => {
    translateY.value = -height * 1.3;
  }, []);

  return (
    <>
      {!!showSplash && (
        <Animated.View style={[styles.test, animatedWrapperStyles]}>
          <Animated.View style={animatedVideoStyles}>
            <FastImage
              source={bgPic}
              style={styles.imageBG}
              resizeMode={FastImage.resizeMode.cover}>
              <Video
                source={require('../../../../assets/video/minus_100.mp4')}
                style={styles.video}
                resizeMode="cover"
                repeat
                muted
                rate={1.0}
                playWhenInactive
                paused={paused}
              />
            </FastImage>
          </Animated.View>
        </Animated.View>
      )}
      {children}
    </>
  );
};

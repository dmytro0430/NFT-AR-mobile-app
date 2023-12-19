import { useIsAppForeground } from '@hooks';
import { ReactNode } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';

import bgPic from '../../../../assets/images/background/background.png';
import { styles } from './style';

export const NavigationWrapper = ({
  children,
}: {
  children: ReactNode;
  isScroll?: boolean;
}) => {
  const isFocused = useIsAppForeground();
  return (
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
        paused={!isFocused}
      />
      <View style={[styles.video, styles.filterColor]}>{children}</View>
    </FastImage>
  );
};

import { hapticPress } from '@utils';
import { Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { styles } from './style';

export const TouchableText = ({
  onPress,
  title,
  textStyle,
  buttonStyle,
  buttonImage,
}: {
  onPress: () => void;
  title: string;
  buttonStyle?: object;
  buttonImage?: object;
  textStyle?: object;
}) => {
  const handlePress = () => hapticPress(onPress);
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, buttonStyle]}>
      {!!buttonImage && <FastImage source={buttonImage} style={styles.image} />}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

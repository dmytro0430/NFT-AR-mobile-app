import { COLORS } from '@theme';
import { hapticPress } from '@utils';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { styles } from './style';

export const Button = ({
  onPress,
  title,
  buttonImage,
  buttonStyle,
  titleStyle,
  imageStyle,
  disabled,
  isLoading,
}: {
  onPress: () => void;
  title: string;
  buttonImage?: number;
  buttonStyle?: object;
  titleStyle?: object;
  imageStyle?: object;
  disabled?: boolean;
  isLoading?: boolean;
}) => {
  const handlePress = () => hapticPress(onPress);
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      style={[styles.container, buttonStyle]}>
      {isLoading ? (
        <ActivityIndicator size="small" color={COLORS.black} />
      ) : (
        <>
          {!!buttonImage && (
            <FastImage source={buttonImage} style={imageStyle} />
          )}
          <Text style={titleStyle}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

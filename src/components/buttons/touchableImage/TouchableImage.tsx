import { hapticPress } from '@utils';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

export const TouchableImage = ({
  onPress,
  buttonImage,
  buttonStyle,
  imageStyle,
  disabled,
}: {
  onPress: () => void;
  buttonImage?: number;
  buttonStyle?: object;
  imageStyle?: object;
  disabled?: boolean;
}) => {
  const handlePress = () => hapticPress(onPress);
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={handlePress}
      style={buttonStyle}>
      <FastImage
        source={buttonImage}
        style={imageStyle}
        resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableOpacity>
  );
};

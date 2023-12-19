import { TouchableImage } from '@components';
import { View } from 'react-native';

import { styles } from './style';

export const GalleryHeaderButtons = ({
  imageRight,
  imageLeft,
  onPressLeft,
  onPressRight,
}: any) => {
  return (
    <View style={styles.container}>
      <TouchableImage
        buttonImage={imageLeft}
        onPress={onPressLeft}
        imageStyle={styles.image}
        buttonStyle={styles.buttomStyleLeft}
      />
      {!!imageRight && (
        <TouchableImage
          buttonImage={imageRight}
          onPress={onPressRight}
          imageStyle={styles.image}
          buttonStyle={styles.buttomStyleRight}
        />
      )}
    </View>
  );
};

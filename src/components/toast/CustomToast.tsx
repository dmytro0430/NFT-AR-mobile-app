import { BlurView } from '@react-native-community/blur';
import { Text, View } from 'react-native';

import { styles } from './style';

export const CustomToast = ({ text }: { text: string }) => {
  return (
    <View style={styles.toastContainer}>
      <BlurView style={styles.blur} blurType="dark" blurAmount={1} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

import { hapticPress } from '@utils';
import { ReactElement } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { styles } from './style';

export const NFTList = ({ data, onPress }: any) => {
  const renderFlatListItem = ({
    item: { imageUrl, title, id },
  }: any): ReactElement => {
    const getImage = () =>
      typeof imageUrl === 'number' ? imageUrl : { uri: imageUrl };
    const handlePress = () => hapticPress(() => onPress(id));

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
        <FastImage
          source={getImage()}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        />

        <View style={styles.itemTitleContainer}>
          <Text style={styles.itemTitle} numberOfLines={1} adjustsFontSizeToFit>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      extraData={data}
      renderItem={renderFlatListItem}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  );
};

import { Paginator } from '@components';
import { COLORS } from '@theme';
import { ReactElement, useRef } from 'react';
import { Animated, FlatList, Image, View, ViewToken } from 'react-native';

import { styles } from './style';

type ViewableItemsChangedCallback = (info: {
  viewableItems: ViewToken[];
}) => void;

export const StepList = ({
  data,
  paginatorStyle,
  width,
  point = {
    size: [6, 6, 6],
    border: [0, 0, 0],
    color: [
      COLORS.philippineSilver,
      COLORS.brightGray,
      COLORS.philippineSilver,
    ],
  },
  callback = () => {},
}: {
  data: { id: string; video: number }[];
  paginatorStyle?: object;
  width: number;
  point?: { size: number[]; border: number[]; color: string[] };
  callback?: (i: number) => void;
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const listRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef<ViewableItemsChangedCallback>(
    ({ viewableItems }) => {
      callback(viewableItems[0].item.id);
    },
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderFlatListItem = ({
    item: { video },
  }: {
    item: { video: number };
  }): ReactElement => {
    return <Image source={video} style={styles.model} resizeMode="contain" />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderFlatListItem}
        pagingEnabled
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewableItemsChanged}
        ref={listRef}
      />
      <View style={[styles.containerPaginator, paginatorStyle]}>
        <Paginator data={data} scrollX={scrollX} width={width} point={point} />
      </View>
    </View>
  );
};

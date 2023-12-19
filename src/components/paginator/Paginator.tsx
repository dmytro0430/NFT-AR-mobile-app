import { Animated, View } from 'react-native';

import { styles } from './style';

export const Paginator = ({
  data,
  scrollX,
  width,
  point,
}: {
  data: any[];
  scrollX: Animated.Value;
  width: number;
  point: {
    size: string[] | number[];
    border: string[] | number[];
    color: string[] | number[];
  };
}) => {
  const renderInterpolate = (i: number, outputRange: string[] | number[]) => {
    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

    return scrollX.interpolate({
      inputRange,
      outputRange,
      extrapolate: 'clamp',
    });
  };

  return (
    <View style={styles.container}>
      {data?.map((_, i) => (
        <Animated.View
          style={[
            styles.dot,
            {
              width: renderInterpolate(i, point.size),
              height: renderInterpolate(i, point.size),
              borderWidth: renderInterpolate(i, point.border),
              backgroundColor: renderInterpolate(i, point.color),
            },
          ]}
          key={i.toString()}
        />
      ))}
    </View>
  );
};

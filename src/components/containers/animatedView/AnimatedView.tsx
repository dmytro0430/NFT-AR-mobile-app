import { ReactNode, useEffect, useState } from 'react';
import { Animated, LayoutAnimation, View } from 'react-native';

export function AnimatedView({
  children,
  show,
}: {
  children: ReactNode;
  show: boolean;
}) {
  const [fade, setFade] = useState(true);

  const animate = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(300, 'easeInEaseOut', 'opacity'),
    );
    setFade(show);
  };

  useEffect(() => animate(), [show]);
  return <View>{!!fade && <Animated.View>{children}</Animated.View>}</View>;
}

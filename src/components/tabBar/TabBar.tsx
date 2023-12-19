import { COLORS } from '@theme';
import { hapticPress } from '@utils';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TAB_FOCUSED_COLOR, TABS_NAVIGATOR } from './constants';
import { styles } from './style';

export const TabBar = ({ state, descriptors, navigation }: any) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.contentContainer, { height: 85 + insets.bottom }]}>
      {state.routes.map(({ key, name }: any, index: number) => {
        const { options } = descriptors[key];

        const isFocused = state.index === index;

        const { icon, titleKey } = TABS_NAVIGATOR[name];
        const color = isFocused ? TAB_FOCUSED_COLOR[name] : COLORS.white;

        const onPress = () =>
          hapticPress(() => {
            const event = navigation.emit({
              type: 'tabPress',
              target: key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name, merge: true });
            }
          });

        const onLongPress = () =>
          hapticPress(() => {
            navigation.emit({
              type: 'tabLongPress',
              target: key,
            });
          });

        return (
          <View style={styles.itemContainer} key={key}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonContainer}>
              <FastImage
                source={icon}
                tintColor={color}
                style={styles.iconStyle}
              />
              <Text style={[styles.title, { color }]}>{t(titleKey)}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

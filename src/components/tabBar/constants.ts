import { TabStackScreens } from '@navigation';
import { COLORS } from '@theme';

import gallery from '../../../assets/icons/gallery/gallery.png';
import team from '../../../assets/icons/team/team.png';
import wallet from '../../../assets/icons/wallet/wallet.png';

export const TABS_NAVIGATOR = {
  [TabStackScreens.weAre]: {
    icon: team,
    titleKey: 'tabNavigator.weAre',
  },
  [TabStackScreens.gallery]: {
    icon: gallery,
    titleKey: 'tabNavigator.gallery',
  },
  [TabStackScreens.wallet]: {
    icon: wallet,
    titleKey: 'tabNavigator.wallet',
  },
};

export const TAB_FOCUSED_COLOR = {
  [TabStackScreens.weAre]: COLORS.violet,
  [TabStackScreens.gallery]: COLORS.blue,
  [TabStackScreens.wallet]: COLORS.orange,
};

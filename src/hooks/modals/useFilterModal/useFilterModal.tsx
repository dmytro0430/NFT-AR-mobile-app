import { useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

import { styles } from './style';

export const useFilterModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowModal = () => {
    setIsVisible(true);
  };

  const handleHideModal = () => {
    setIsVisible(false);
  };

  const renderModal = () => (
    <Modal
      isVisible={isVisible}
      style={styles.container}
      onBackButtonPress={handleHideModal}
      onBackdropPress={handleHideModal}
      useNativeDriver
      useNativeDriverForBackdrop
      hideModalContentWhileAnimating>
      <View style={styles.contentContainer} />
    </Modal>
  );

  return {
    handleShowModal,
    handleHideModal,
    renderModal,
  };
};

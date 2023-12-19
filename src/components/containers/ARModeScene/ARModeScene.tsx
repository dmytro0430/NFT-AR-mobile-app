import { COLORS } from '@theme';
import {
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations,
  ViroARImageMarker,
  ViroARScene,
  ViroARTrackingTargets,
  ViroDirectionalLight,
  ViroOmniLight,
  ViroTrackingStateConstants,
} from '@viro-community/react-viro';
import { useState } from 'react';
import RNFS from 'react-native-fs';

import monster from '../../../../assets/images/lulu/monster.png';

ViroAnimations.registerAnimations({
  animatePositionYImage: {
    properties: {
      positionY: 0.05,
    },
    easing: 'Linear',
    duration: 500,
  },
  animateOpacityImage: {
    properties: {
      opacity: 1,
    },
    easing: 'Linear',
    duration: 100,
  },
  // @ts-ignore
  animateImage: [['animatePositionYImage'], ['animateOpacityImage']],
});

export const ARModeScene = ({
  model,
  setIsLoading,
  type,
  scale,
  setRun,
}: any) => {
  const [sceneReady, setSceneReady] = useState(false);
  const [runModel, setRunModel] = useState(false);
  const [runInitModel, setRunInitModel] = useState(false);

  ViroARTrackingTargets.createTargets({
    targetOne: {
      source: monster,
      orientation: 'Up',
      physicalWidth: 0.1, // real world width in meters
    },
  });

  const handle = () => {
    setRun(true);
    setRunInitModel(true);
  };

  const uploadCompleate = (state: number): void => {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setSceneReady(true);
    }
  };

  // @ts-ignore
  return (
    <ViroARScene onTrackingUpdated={uploadCompleate}>
      <ViroAmbientLight
        color={COLORS.white}
        intensity={model ? 40 : undefined}
      />

      <ViroDirectionalLight color={COLORS.white} direction={[0, -2, -0.2]} />

      <ViroOmniLight
        intensity={600}
        position={[-10, 10, 10]}
        color={'#FFFFFF'}
        attenuationStartDistance={0}
        attenuationEndDistance={20}
      />
      <ViroOmniLight
        intensity={600}
        position={[10, -10, 10]}
        color={'#FFFFFF'}
        attenuationStartDistance={0}
        attenuationEndDistance={20}
      />
      <ViroOmniLight
        intensity={600}
        position={[10, -10, 10]}
        color={'#FFFFFF'}
        attenuationStartDistance={0}
        attenuationEndDistance={20}
      />
      <ViroOmniLight
        intensity={600}
        position={[-10, -10, 10]}
        color={'#FFFFFF'}
        attenuationStartDistance={0}
        attenuationEndDistance={20}
      />
      {!!sceneReady && (
        <ViroARImageMarker
          target="targetOne"
          onAnchorFound={handle}
          pauseUpdates={runInitModel}>
          <Viro3DObject
            source={model || { uri: RNFS.LibraryDirectoryPath + '/scene.gltf' }}
            type={type || 'GLTF'}
            rotation={[-90, 0, 0]}
            position={[-0.01, -0.06, 0.06]}
            scale={scale || [0.62, 0.62, 0.62]}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            animation={
              runModel
                ? {
                    name: 'All Animations',
                    run: true,
                    loop: true,
                  }
                : {
                    name: 'animateImage',
                    run: runInitModel,
                    loop: false,
                    onFinish: () => {
                      setRunModel(true);
                    },
                  }
            }
          />
        </ViroARImageMarker>
      )}
    </ViroARScene>
  );
};

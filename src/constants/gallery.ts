import background from '../../assets/images/background/background.png';
import droneImage from '../../assets/images/drone/Drone.png';
import sprayImage from '../../assets/images/spray/Spray.png';
import dron from '../../assets/models/drone.glb';
import spray from '../../assets/models/spray.glb';

export const MOCK_BUY_BUTTON = {
  id: 'buyALulu',
  imageUrl: background,
  title: 'Buy a Lulu',
};

export const MOCK_GALLERY_DATA = [
  {
    id: '1',
    imageUrl: droneImage,
    title: 'Dron',
    model: dron,
    type: 'GLB',
    scale: [0.03, 0.03, 0.03],
    traits: [
      { traitType: 'Brain Stem', value: 'Guardsman Red' },
      { traitType: 'Spinner flare', value: 'Lightgray' },
      { traitType: 'Spinner', value: 'Cod Gray' },
      { traitType: 'Disc', value: 'Abbey' },
      { traitType: 'Controller', value: 'Black' },
      { traitType: 'Body', value: 'Black' },
    ],
  },
  {
    id: '2',
    imageUrl: sprayImage,
    title: 'Spray',
    model: spray,
    type: 'GLB',
    scale: [0.03, 0.03, 0.03],
    traits: [
      { traitType: 'Spray button', value: 'Black' },
      { traitType: 'Spray colour', value: 'Bitter Lemon' },
      { traitType: 'Can', value: 'Cod Gray' },
      { traitType: 'Flare', value: 'White' },
    ],
  },
];

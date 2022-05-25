import { Platform, Dimensions } from 'react-native';

const { width, height, scale } = Dimensions.get('window');

const isIphoneX = () =>
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 812 || width === 812 || height === 896 || width === 896);

const utils = {
  OS: Platform.OS,
  env:
    process &&
    process.env &&
    process.env.NODE_ENV &&
    process.env.NODE_ENV === 'development'
      ? 'dev'
      : 'prod',
  width,
  height,
  scale,
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  isIphoneX,
};

export default utils;

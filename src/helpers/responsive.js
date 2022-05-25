const {Dimensions} = require('react-native');
const {width, height} = Dimensions.get('screen');
export const ww = (param) => {
  return width * param || width;
};
export const wh = (param) => {
  return height * param || height;
};

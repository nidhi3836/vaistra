import { Dimensions,PixelRatio } from "react-native";

const {height,width} = Dimensions.get("window");

const widthToDp = num =>{
  let givenWidth = typeof num === 'num' ? num : parseFloat(num);
  const layoutsize = (width * givenWidth) / 100;
  return PixelRatio.roundToNearestPixel(layoutsize);
}
const heights= height
const widths= width
const heightToDp = num =>{
  let givenHeight = typeof num === 'num' ? num : parseFloat(num);
  const layoutsize = (height * givenHeight) / 100;
  return PixelRatio.roundToNearestPixel( layoutsize);
}
export {widthToDp,heightToDp,heights,widths};

export const SCREEN_HEIGHT = height;

export const percentage = (Dimension, percentage) => {
    return (Dimension / 100) * percentage;
  };
export const topHeight = percentage(SCREEN_HEIGHT,60);
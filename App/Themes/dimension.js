import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const isIphoneX =
  Platform.OS === "ios" && (height > 800 || height > 800) ? true : false;

module.exports = {
  width,
  height,
  heightHeader: Platform.OS === "ios" ? 50 : 60,
  isIphoneX,
  modalHeaderMargin: Platform.OS === "android" ? 0 : isIphoneX ? 45 : 20
};

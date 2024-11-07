import { Dimensions, Platform } from "react-native";

const { width, height, fontScale } = Dimensions.get("window");
const { OS, Version } = Platform;
const isAndroid = OS === "android";

export { width, height, fontScale, OS, Version, isAndroid };

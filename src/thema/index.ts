import { Dimensions, Platform, ViewStyle, StyleProp } from "react-native";

export const OS = Platform.OS === "android" ? "android" : "ios";
const { width, height } = Dimensions.get("screen");

const wWidth = Dimensions.get("window").width;
const wHeight = Dimensions.get("window").height;

const fontTypes = {
  android: {
    regular: "Nunito_400Regular",
    light: "Nunito_300Light",
    thin: "Nunito_200ExtraLight",
    bold: "Nunito_700Bold",
    xBold: "Nunito_800ExtraBold",
  },
  ios: {
    regular: "Nunito_400Regular",
    light: "Nunito_300Light",
    thin: "Nunito_200ExtraLight",
    bold: "Nunito_700Bold",
    xBold: "Nunito_800ExtraBold",
  },
};
const AppTheme = {
  device: { width, height, wWidth, wHeight },
  defaultOpacity: 0.9,
  font: {
    types: fontTypes[OS],
    size: {
      heading_hg: 96, //extra bold
      heading_xl: 48, //extra bold
      heading_lg: 32,
      heading_md: 20,
      heading_sm: 16,
      heading_xs: 14,
      text_lg: 20,
      text_md: 16,
      text_sm: 14,
      text_xs: 12, //regular & bold
    },
  },
  colors: {
    product: {
      blue_light: "#8FB2F5",
    },
    base: {
      gray_900: "#13131A",
      gray_800: "#16161F",
      gray_700: "#1C1C27",
      gray_600: "#22222F",
      gray_500: "#3B3B54",
      gray_400: "#7F7F98",
      gray_300: "#ABABC4",
      gray_200: "#BFBFD4",
      gray_100: "##FAFAFA",
    },
    white: "#FFFFFF",
  },
  opacity: { disabled: 0.5, regular: 1 },
  image: {
    contain: { resizeMode: "contain" },
    wrapper: <StyleProp<ViewStyle>>{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  },
};
export const flexStyles = (flex: number) => ({ flex: flex });

export default AppTheme;

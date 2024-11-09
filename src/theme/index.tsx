import { createTheme } from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

import { dark_pallet, light_pallet } from "./colors";
import { borderRadius } from "./radius";
import { spacings } from "./spacings";

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

const buttonVariants = {
  defaults: {
    borderRadius: "xl",
    alignItems: "center",
    paddingVertical: "ms",
    justifyContent: "center",
    backgroundColor: "primary300",
  },

  outline: {
    borderWidth: 1.5,
    borderRadius: "xl",
    alignItems: "center",
    paddingVertical: "ms",
    justifyContent: "center",
    borderColor: "primary300",
    backgroundColor: "transparent",
  },

  text: {
    alignItems: "center",
    paddingVertical: "ms",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
};

const textVariants = {
  300: { fontFamily: "Rubik_300Light" },
  400: { fontFamily: "Rubik_400Regular" },
  500: { fontFamily: "Rubik_500Medium" },
  600: { fontFamily: "Rubik_600SemiBold" },
  700: { fontFamily: "Rubik_700Bold" },

  defaults: {
    color: "color100",
    fontFamily: "Rubik_400Regular",
  },
};

const darkTheme = createTheme({
  textVariants,
  buttonVariants,
  spacing: spacings,
  colors: dark_pallet,
  borderRadii: borderRadius,
});

const lightTheme = createTheme({
  textVariants,
  buttonVariants,
  spacing: spacings,
  colors: light_pallet,
  borderRadii: borderRadius,
});

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<unknown>>(
  styles: (theme: Theme) => T
) => {
  return () => {
    return styles(lightTheme);
  };
};

export type Theme = typeof lightTheme;
export { darkTheme, lightTheme };

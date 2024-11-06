import { createTheme } from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

import { dark_pallet, light_pallet } from "./colors";
import { borderRadius } from "./radius";
import { spacings } from "./spacings";

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

const darkTheme = createTheme({
  spacing: spacings,
  colors: dark_pallet,
  borderRadii: borderRadius,
  textVariants: {
    body: { fontSize: 16 },
    title: { fontSize: 20, fontWeight: "bold" },
    defaults: {
      color: "color100",
    },
  },
});

const lightTheme = createTheme({
  spacing: spacings,
  colors: light_pallet,
  borderRadii: borderRadius,
  textVariants: {
    body: { fontSize: 16 },
    title: { fontSize: 20, fontWeight: "bold" },
    defaults: {
      color: "color100",
    },
  },
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

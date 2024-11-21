import { createTheme, ThemeProvider as ThemeProviderRE } from "@shopify/restyle";
import { ReactNode } from "react";
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

export type Theme = typeof lightTheme;

const lightTheme = createTheme({
  textVariants,
  buttonVariants,
  spacing: spacings,
  colors: light_pallet,
  borderRadii: borderRadius,
});

const darkTheme: Theme = {
  ...lightTheme,
  colors: dark_pallet,
};

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<unknown>>(
  styles: (theme: Theme) => T
) => {
  return () => {
    const themeApp = lightTheme;
    return styles(themeApp);
  };
};

type ThemeProviderProps = {
  children: ReactNode;
  isDark: boolean;
};

export const ThemeProvider = ({ children, isDark }: ThemeProviderProps) => {
  const themeApp = isDark ? darkTheme : lightTheme;

  return <ThemeProviderRE theme={themeApp}>{children}</ThemeProviderRE>;
};

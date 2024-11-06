// import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";
// import { ImageStyle, TextStyle, ViewStyle } from "react-native";

// import { dark_pallet, light_pallet } from "./colors";

// type NamedStyles<T> = {
//   [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
// };

// const light = createTheme({
//   colors: {
//     ...light_pallet,
//   },
//   spacing: {
//     xs: 4,
//     sm: 8,
//     ms: 12,
//     md: 16,
//     ml: 24,
//     lg: 32,
//     xl: 64,
//   },
//   borderRadii: {
//     sm: 3,
//     md: 6,
//     lg: 12,
//     xl: 24,
//   },
//   textVariants: {
//     body: { fontSize: 16 },
//     title: { fontSize: 20, fontWeight: "bold" },
//     large: { fontSize: 36 },
//     extra_large: {
//       fontSize: 64,
//       fontWeight: "bold",
//     },
//     defaults: {
//       color: light_pallet.color100,
//     },
//   },
// });

// const dark = createTheme({
//   colors: {
//     ...dark_pallet,
//   },
//   spacing: {
//     xs: 4,
//     sm: 8,
//     ms: 12,
//     md: 16,
//     ml: 24,
//     lg: 32,
//     xl: 64,
//   },
//   borderRadii: {
//     sm: 3,
//     md: 6,
//     lg: 12,
//     xl: 24,
//   },
//   textVariants: {
//     body: { fontSize: 16 },
//     title: { fontSize: 20, fontWeight: "bold" },
//     large: { fontSize: 36 },
//     extra_large: {
//       fontSize: 64,
//       fontWeight: "bold",
//     },
//     defaults: {
//       color: dark_pallet.color100,
//       // We can define a default text variant here.
//     },
//   },
// });

// const theme = (isDark: boolean) => (isDark ? dark : light);

// export const useTheme = () => {
//   return useRestyleTheme<Theme>();
// };

// export const makeStyles = <T extends NamedStyles<T> | NamedStyles<unknown>>(
//   styles: (theme: Theme) => T
// ) => {
//   return () => {
//     return styles(theme);
//   };
// };

// export type Theme = typeof theme;
// export default theme;

import { ResponsiveValue } from "@shopify/restyle";
import { DimensionValue } from "react-native";

import Box from "./Box";

import { Theme } from "@/theme";

type DividerProps = {
  color?: keyof Theme["colors"];
  width?: ResponsiveValue<DimensionValue | undefined, undefined>;
};

export function Divider({ width, color }: DividerProps) {
  return <Box height={1} width={width ?? "100%"} backgroundColor={color ?? "bg200"} />;
}

import Box from "./Box";

import { DividerProps } from "@/utils/types";

export function Divider({ width, color, ...rest }: DividerProps) {
  return <Box height={1} width={width ?? "100%"} backgroundColor={color ?? "bg200"} {...rest} />;
}

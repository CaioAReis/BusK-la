import Box from "./Box";

import { DotProps } from "@/utils/types";

export function Dot({ width, height, selected }: DotProps) {
  return (
    <Box
      borderRadius="lg"
      width={width ?? 8}
      height={height ?? 8}
      backgroundColor={selected ? "primary300" : "bg400"}
    />
  );
}

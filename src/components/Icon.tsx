import { useTheme } from "@shopify/restyle";
import { icons } from "lucide-react-native";

import Box from "./Box";

import { Theme } from "@/theme";
import { IconProps } from "@/utils/types";

export function Icon({ icon, size, color, ...boxProps }: IconProps) {
  const colors = useTheme<Theme>().colors;
  const LucideIcon = icons[icon];

  return (
    <Box {...boxProps}>
      <LucideIcon size={size ?? 28} color={color ? colors[color] : colors.color200} />
    </Box>
  );
}

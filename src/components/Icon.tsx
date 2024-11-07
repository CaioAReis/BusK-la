import { BoxProps } from "@shopify/restyle";
import { icons } from "lucide-react-native";

import Box from "./Box";

import { makeStyles, Theme } from "@/theme";

type IconProps = {
  size?: number;
  icon: keyof typeof icons;
  color?: keyof Theme["colors"];
} & BoxProps<Theme>;

export function Icon({ icon, size, color, ...boxProps }: IconProps) {
  const styles = useStyles();
  const LucideIcon = icons[icon];

  return (
    <Box {...boxProps}>
      <LucideIcon size={size ?? 28} color={color ? styles.userColor(color) : styles.defaultColor} />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  defaultColor: theme.colors.color200,
  userColor: (color: keyof Theme["colors"]) => theme.colors[color],
}));

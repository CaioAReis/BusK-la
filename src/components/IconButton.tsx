import { BoxProps } from "@shopify/restyle";
import { icons } from "lucide-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import Box from "./Box";
import { Icon } from "./Icon";

import { Theme } from "@/theme";

type ButtonProps = {
  size?: number;
  icon: keyof typeof icons;
  color?: keyof Theme["colors"];
  boxProps?: BoxProps<Theme>;
} & TouchableOpacityProps;

export function IconButton({ icon, size, color, boxProps, ...touchableProps }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...touchableProps}>
      <Box p="md" borderRadius="xl" {...boxProps} style={touchableProps.style}>
        <Icon icon={icon} size={size} color={color} />
      </Box>
    </TouchableOpacity>
  );
}

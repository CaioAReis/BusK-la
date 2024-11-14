import { TouchableOpacity } from "react-native";

import Box from "./Box";
import { Icon } from "./Icon";

import { ButtonProps } from "@/utils/types";

export function IconButton({ icon, size, color, boxProps, ...touchableProps }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...touchableProps}>
      <Box p="sm" borderRadius="xl" {...boxProps} style={touchableProps.style}>
        <Icon icon={icon} size={size} color={color} />
      </Box>
    </TouchableOpacity>
  );
}

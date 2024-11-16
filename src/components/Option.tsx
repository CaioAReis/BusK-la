import { TouchableOpacity } from "react-native";

import Box from "./Box";
import { Icon } from "./Icon";
import Text from "./Text";

import { OptionProps } from "@/utils/types";

export function Option({
  color,
  children,
  leftIcon,
  selected,
  right: Right,
  ...touchableProps
}: OptionProps) {
  const colorInfo = color ?? (selected ? "primary300" : "color300");

  return (
    <TouchableOpacity activeOpacity={0.7} {...touchableProps}>
      <Box
        p="md"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        opacity={touchableProps.disabled ? 0.5 : 1}
        backgroundColor={selected ? "primary100" : "bg100"}
      >
        <Box flexDirection="row" alignItems="center" gap="md">
          {leftIcon && <Icon icon={leftIcon} color={color ?? "primary300"} size={24} />}
          <Text variant={selected ? 500 : 400} fontSize={16} color={colorInfo}>
            {children}
          </Text>
        </Box>

        {Right ?? <Icon icon="ChevronRight" color={colorInfo} size={24} />}
      </Box>
    </TouchableOpacity>
  );
}

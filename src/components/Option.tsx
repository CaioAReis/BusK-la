import { TouchableOpacity } from "react-native";

import Box from "./Box";
import { Icon } from "./Icon";
import Text from "./Text";

import { OptionProps } from "@/utils/types";

export function Option({ children, leftIcon, selected, ...touchableProps }: OptionProps) {
  const color = selected ? "primary300" : "color300";

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
          {leftIcon && <Icon icon={leftIcon} color="primary300" size={24} />}
          <Text variant={selected ? 500 : 400} fontSize={16} color={color}>
            {children}
          </Text>
        </Box>
        <Icon icon="ChevronRight" color={color} size={24} />
      </Box>
    </TouchableOpacity>
  );
}

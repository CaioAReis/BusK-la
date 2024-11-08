import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import Box from "./Box";
import { Icon } from "./Icon";
import Text from "./Text";

type OptionProps = {
  children: string;
  selected: boolean;
} & TouchableOpacityProps;

export function Option({ children, selected, ...touchableProps }: OptionProps) {
  const color = selected ? "primary300" : "color300";

  return (
    <TouchableOpacity activeOpacity={0.7} {...touchableProps}>
      <Box
        p="md"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={selected ? "primary100" : "bg100"}
      >
        <Text variant={selected ? 500 : 400} fontSize={16} color={color}>
          {children}
        </Text>
        <Icon icon="ChevronRight" color={color} size={24} />
      </Box>
    </TouchableOpacity>
  );
}

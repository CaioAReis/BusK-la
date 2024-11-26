import {
  spacing,
  SpacingProps,
  VariantProps,
  createVariant,
  createRestyleComponent,
} from "@shopify/restyle";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import Text from "./Text";

import { Theme } from "@/theme";

type BoxCustomProps = SpacingProps<Theme> & VariantProps<Theme, "buttonVariants">;

const Box = createRestyleComponent<BoxCustomProps, Theme>([
  spacing,
  createVariant({ themeKey: "buttonVariants" }),
]);

type ButtonProps = {
  children?: string;
  color?: keyof Theme["colors"];
} & BoxCustomProps &
  TouchableOpacityProps;

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <Box {...props}>
        <Text
          fontSize={16}
          variant={700}
          textAlign="center"
          color={props.variant === "outline" || props.variant === "text" ? "primary300" : "bg100"}
        >
          {props.children}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

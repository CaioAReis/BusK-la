import { forwardRef } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import Text from "./Text";

import { makeStyles } from "@/theme";

type ButtonProps = {
  children?: string;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ children, ...touchableProps }, ref) => {
    const styles = useStyles();

    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.8}
        {...touchableProps}
        style={[styles.button, touchableProps.style]}
      >
        <Text fontSize={16} textAlign="center" color="bg100" variant={700}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
);

const useStyles = makeStyles((theme) => ({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.ms,
    borderRadius: theme.borderRadii.xl,
    backgroundColor: theme.colors.primary300,
  },
}));

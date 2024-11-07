import { icons } from "lucide-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { makeStyles, Theme } from "@/theme";

type ButtonProps = {
  size?: number;
  icon: keyof typeof icons;
  color?: keyof Theme["colors"];
} & TouchableOpacityProps;

export function IconButton({ icon, size, color, ...touchableProps }: ButtonProps) {
  const styles = useStyles();
  const LucideIcon = icons[icon];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...touchableProps}
      style={[styles.button, touchableProps.style]}
    >
      <LucideIcon size={size ?? 28} color={color ? styles.userColor(color) : styles.defaultColor} />
    </TouchableOpacity>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.xl,
  },
  defaultColor: theme.colors.color200,
  userColor: (color: keyof Theme["colors"]) => theme.colors[color],
}));

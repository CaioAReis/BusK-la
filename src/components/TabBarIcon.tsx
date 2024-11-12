import { icons } from "lucide-react-native";

import Box from "./Box";
import { Icon } from "./Icon";

type TabBarIconProps = {
  name: string;
  focused: boolean;
  icon: keyof typeof icons;
};

export function TabBarIcon({ icon, focused }: TabBarIconProps) {
  return (
    <Box backgroundColor={focused ? "primary300" : "bg100"} p="sm" borderRadius="xl">
      <Icon icon={icon} color={focused ? "bg100" : "bg500"} />
    </Box>
  );
}

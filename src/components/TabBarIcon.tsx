import Box from "./Box";
import { Icon } from "./Icon";

import { TabBarIconProps } from "@/utils/types";

export function TabBarIcon({ icon, focused }: TabBarIconProps) {
  return (
    <Box backgroundColor={focused ? "primary300" : "bg100"} p="sm" borderRadius="xl">
      <Icon icon={icon} color={focused ? "bg100" : "bg500"} />
    </Box>
  );
}

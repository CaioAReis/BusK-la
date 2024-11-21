import Box from "./Box";
import Text from "./Text";

import { StepsLineProps } from "@/utils/types";

export function StepsLine({ status }: StepsLineProps) {
  const inactiveColor = "bg400";
  const activeColor = "secondary300";

  return (
    <Box gap="ms">
      <Box flexDirection="row" alignItems="center" px="md">
        <Box
          width={12}
          height={12}
          borderRadius="xl"
          backgroundColor={status >= 0 ? activeColor : inactiveColor}
        />

        <Box flex={1} height={2} backgroundColor={status >= 1 ? activeColor : inactiveColor} />

        <Box
          width={12}
          height={12}
          borderRadius="xl"
          backgroundColor={status >= 1 ? activeColor : inactiveColor}
        />

        <Box flex={1} height={2} backgroundColor={status >= 2 ? activeColor : inactiveColor} />

        <Box
          width={12}
          height={12}
          borderRadius="xl"
          backgroundColor={status >= 2 ? activeColor : inactiveColor}
        />
      </Box>

      <Box flexDirection="row" alignItems="center" justifyContent="space-between">
        <Text variant={500} fontSize={12} color={status >= 0 ? activeColor : inactiveColor}>
          Coleta
        </Text>

        <Text variant={500} fontSize={12} color={status >= 1 ? activeColor : inactiveColor} ml="sm">
          A Caminho
        </Text>

        <Text variant={500} fontSize={12} color={status >= 2 ? activeColor : inactiveColor}>
          Entregue
        </Text>
      </Box>
    </Box>
  );
}

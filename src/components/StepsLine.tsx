import Box from "./Box";
import Text from "./Text";

import { StepsLineProps } from "@/utils/types";

export function StepsLine({ status }: StepsLineProps) {
  return (
    <Box gap="ms">
      <Box flexDirection="row" alignItems="center" px="md">
        <Box
          width={12}
          height={12}
          borderRadius="xl"
          backgroundColor={status >= 0 ? "secondary300" : "bg400"}
        />

        <Box flex={1} height={2} backgroundColor={status >= 1 ? "secondary300" : "bg400"} />

        <Box
          width={12}
          height={12}
          borderRadius="xl"
          backgroundColor={status >= 1 ? "secondary300" : "bg400"}
        />

        <Box flex={1} height={2} backgroundColor={status >= 2 ? "secondary300" : "bg400"} />

        <Box
          width={12}
          height={12}
          borderRadius="xl"
          backgroundColor={status >= 2 ? "secondary300" : "bg400"}
        />
      </Box>

      <Box flexDirection="row" alignItems="center" justifyContent="space-between">
        <Text variant={500} fontSize={12} color={status >= 0 ? "secondary300" : "bg400"}>
          Coleta
        </Text>

        <Text variant={500} fontSize={12} color={status >= 1 ? "secondary300" : "bg400"} ml="sm">
          A Caminho
        </Text>

        <Text variant={500} fontSize={12} color={status >= 2 ? "secondary300" : "bg400"}>
          Entregue
        </Text>
      </Box>
    </Box>
  );
}
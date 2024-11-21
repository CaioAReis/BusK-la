import Box from "./Box";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { StepsLine } from "./StepsLine";
import Text from "./Text";

import { customDate } from "@/utils/constants/masks";
import { DeliveryCardProps } from "@/utils/types";

const Status = {
  0: { label: "PENDENTE", color: "blue" },
  1: { label: "A CAMINHO", color: "purple" },
  2: { label: "ENTREGUE", color: "green" },
};

const AddressLabel = {
  0: "Coleta",
  1: "Levando para",
  2: "Entregue em",
};

export function DeliveryCard({
  code,
  started,
  createdAt,
  addresses,
  status = 0,
  ...boxProps
}: Partial<DeliveryCardProps>) {
  return (
    <Box
      p="ms"
      mb="sm"
      gap="md"
      borderWidth={2}
      borderRadius="md"
      borderColor="bg200"
      backgroundColor="bg100"
      {...boxProps}
    >
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text variant={500} fontSize={16}>
          <Text variant={500} color="primary300">
            {"# "}
          </Text>
          {code}
        </Text>

        {started ? (
          <Button paddingVertical="xs" paddingHorizontal="ml">
            Detalhes
          </Button>
        ) : (
          <Text color="color500">{customDate(createdAt!)}</Text>
        )}
      </Box>

      {started ? (
        <StepsLine status={status} />
      ) : (
        <Box flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box flexDirection="row" alignItems="center" gap="sm">
            <Icon icon="Clock" size={24} color="color500" />
            <Text color="color500">Status</Text>
          </Box>

          <Text variant={500} color={Status[status]?.color as "color200"}>
            {Status[status]?.label}
          </Text>
        </Box>
      )}

      <Box gap="sm">
        <Box flexDirection="row" alignItems="center" gap="sm">
          <Icon icon="MapPin" size={24} color="color500" />
          <Text color="color500">{AddressLabel[status]}</Text>
        </Box>

        <Text variant={500} textAlign="center" color={started ? "secondary300" : "primary300"}>
          {status > 0 ? addresses?.toDelivery.address : addresses?.toCollect.address}
        </Text>
      </Box>
    </Box>
  );
}

import Box from "./Box";
import { Icon } from "./Icon";
import Text from "./Text";

import { customDate } from "@/utils/constants/masks";

type DeliveryCardProps = {
  code: string;
  createdAt: Date;
  address: string;
  status: "pending" | "onway" | "delivered";
};

const Status = {
  pending: { label: "PENDENTE", color: "blue" },
  onway: { label: "A CAMINHO", color: "purple" },
  delivered: { label: "ENTREGUE", color: "green" },
};

export function DeliveryCard({ status = "pending" }: DeliveryCardProps) {
  return (
    <Box backgroundColor="bg100" my="sm" p="ms" borderRadius="md" gap="md">
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text variant={500} fontSize={16}>
          <Text variant={500} color="primary300">
            {"# "}
          </Text>
          DMO1PKTX24C
        </Text>
        <Text color="color500">{customDate(new Date())}</Text>
      </Box>

      <Box flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box flexDirection="row" alignItems="center" gap="sm">
          <Icon icon="Clock" size={24} color="color500" />
          <Text color="color500">Status</Text>
        </Box>

        <Text variant={500} color={Status[status]?.color as "color200"}>
          {Status[status]?.label}
        </Text>
      </Box>

      <Box gap="sm">
        <Box flexDirection="row" alignItems="center" gap="sm">
          <Icon icon="MapPin" size={24} color="color500" />
          <Text color="color500">Coleta</Text>
        </Box>

        <Text variant={500} textAlign="center" color="primary300">
          Av. Eremita Francisa de Jesus, 823, São José
        </Text>
      </Box>
    </Box>
  );
}

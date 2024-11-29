import { BoxInfo } from "./BoxInfo";

import { Box, Icon, Text } from "@/components";

type UserDeliveryInfoProps = {
  totalKM: number;
  deliveryTime: number;
  totalDeliveries: number;
};

export function UserDeliveryInfo({
  totalKM,
  deliveryTime,
  totalDeliveries,
}: UserDeliveryInfoProps) {
  return (
    <Box flexDirection="row" gap="ms">
      <Box gap="ms" flex={1}>
        <BoxInfo icon="PackageCheck" label="Entregas totais" value={`${totalDeliveries}`} />
        <BoxInfo icon="Timer" label="Tempo médio" value={`${deliveryTime} min`} />
      </Box>

      <Box
        flex={1}
        borderRadius="md"
        alignItems="center"
        justifyContent="center"
        backgroundColor="primaryAlpha500"
      >
        <Icon icon="TrafficCone" size={50} color="primary300" />

        <Box gap="xs" mt="md" alignItems="center">
          <Text variant={500} fontSize={16}>
            {totalKM} km
          </Text>

          <Text fontSize={12} color="color500">
            Distância Percorrida
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

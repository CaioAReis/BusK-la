import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import { Box, Text } from "@/components";
import { API } from "@/services/api";
import { DeliveryCardProps } from "@/utils/types";

export default function Shipping() {
  const { deliveryId } = useLocalSearchParams();
  const [delivery, setDelivery] = useState<DeliveryCardProps | null>(null);

  useEffect(() => {
    API.getDelivery(deliveryId as string).then((result) => {
      if (!result.error) return setDelivery(result.delivery as DeliveryCardProps);
    });
  }, []);

  if (!delivery) return;

  return (
    <Box>
      <Text onPress={() => router.back()}>{deliveryId}</Text>
    </Box>
  );
}

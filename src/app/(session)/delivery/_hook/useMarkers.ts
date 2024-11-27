import { DeliveryCardProps } from "@/utils/types";

export function useMarkers({ delivery }: { delivery: DeliveryCardProps | null }) {
  const collectPinImage =
    delivery?.status === 1
      ? require("@/assets/images/OnWay.png")
      : require("@/assets/images/Collect.png");

  const collectCoords = {
    latitude: delivery?.addresses.toCollect.coords[0] ?? 0,
    longitude: delivery?.addresses.toCollect.coords[1] ?? 0,
  };

  const deliveryPinImage =
    delivery?.status === 2
      ? require("@/assets/images/OnWay.png")
      : require("@/assets/images/Delivery.png");

  const deliveryCoords = {
    latitude: delivery?.addresses.toDelivery.coords[0] ?? 0,
    longitude: delivery?.addresses.toDelivery.coords[1] ?? 0,
  };

  return { collectCoords, collectPinImage, deliveryCoords, deliveryPinImage };
}

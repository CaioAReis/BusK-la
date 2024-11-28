import { LocationObject } from "expo-location";
import { useContext } from "react";

import AppContext from "@/utils/contexts/AppContext";
import { DeliveryCardProps } from "@/utils/types";

type MarkersProps = {
  position: LocationObject | null;
  delivery: DeliveryCardProps | null;
};

export function useMarkers({ delivery, position }: MarkersProps) {
  const { defaultCity } = useContext(AppContext);

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

  const StartRegion = {
    0: [position?.coords.latitude, position?.coords.longitude],
    1: delivery?.addresses.toDelivery.coords,
    2: delivery?.addresses.toDelivery.coords,
  };

  const initialRegion = {
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    latitude: StartRegion[delivery?.status ?? 0]![0] ?? defaultCity.coords[0],
    longitude: StartRegion[delivery?.status ?? 0]![1] ?? defaultCity.coords[1],
  };

  return { collectCoords, collectPinImage, deliveryCoords, deliveryPinImage, initialRegion };
}

import { useTheme } from "@shopify/restyle";
import {
  LocationObject,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import MapView from "react-native-maps";

import { API } from "@/services/api";
import { Theme } from "@/theme";
import { DeliveryCardProps } from "@/utils/types";

export function useDelivery() {
  const { id } = useLocalSearchParams();
  const colors = useTheme<Theme>().colors;
  const _mapRef = useRef<MapView | null>(null);
  const [position, setPosition] = useState<LocationObject | null>(null);
  const [delivery, setDelivery] = useState<DeliveryCardProps | null>(null);

  const requestLocationPermission = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setPosition(currentPosition);
    }
  };

  const onGoToCurrentPosition = () => {
    _mapRef.current?.animateToRegion({
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      latitude: position?.coords.latitude ?? 0,
      longitude: position?.coords.longitude ?? 0,
    });
  };

  const onGoBack = () => router.back();

  useEffect(() => {
    API.getDelivery(id as string).then((result) => {
      if (!result.error) return setDelivery(result.delivery as DeliveryCardProps);
    });
  }, []);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return {
    colors,
    _mapRef,
    delivery,
    position,
    onGoBack,
    setDelivery,
    onGoToCurrentPosition,
  };
}

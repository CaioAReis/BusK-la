import { useTheme } from "@shopify/restyle";
import {
  getCurrentPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useRef, useState } from "react";
import MapView from "react-native-maps";

import { API } from "@/services/api";
import { Theme } from "@/theme";
import AppContext from "@/utils/contexts/AppContext";
import { DeliveryCardProps } from "@/utils/types";

export function useDelivery() {
  const { id } = useLocalSearchParams();
  const colors = useTheme<Theme>().colors;
  const _mapRef = useRef<MapView | null>(null);
  const { defaultCity } = useContext(AppContext);
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
      latitude: position?.coords.latitude ?? defaultCity.coords[0],
      longitude: position?.coords.longitude ?? defaultCity.coords[1],
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
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

  // if (!delivery) return;

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

  return {
    colors,
    _mapRef,
    delivery,
    position,
    onGoBack,
    setDelivery,
    initialRegion,
    onGoToCurrentPosition,
  };
}

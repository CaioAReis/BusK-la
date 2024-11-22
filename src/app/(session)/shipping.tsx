import { useTheme } from "@shopify/restyle";
import {
  LocationObject,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";

import { Box, Button, IconButton } from "@/components";
import { API } from "@/services/api";
import { Theme } from "@/theme";
import { customMapStyle } from "@/utils/constants/customMapStyle";
import AppContext from "@/utils/contexts/AppContext";
import { DeliveryCardProps } from "@/utils/types";

export default function Shipping() {
  const colors = useTheme<Theme>().colors;
  const _mapRef = useRef<MapView | null>(null);
  const { deliveryId } = useLocalSearchParams();
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

  const handleGoToCurrentPosition = () => {
    _mapRef.current?.animateToRegion({
      latitude: position?.coords.latitude ?? defaultCity.coords[0],
      longitude: position?.coords.longitude ?? defaultCity.coords[1],
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  useEffect(() => {
    API.getDelivery(deliveryId as string).then((result) => {
      if (!result.error) return setDelivery(result.delivery as DeliveryCardProps);
    });
  }, []);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  if (!delivery) return;

  return (
    <Box flex={1} position="relative" backgroundColor="primaryAlpha400">
      {position && (
        <MapView
          ref={_mapRef}
          showsUserLocation
          showsCompass={false}
          showsMyLocationButton={false}
          customMapStyle={customMapStyle}
          style={{ borderWidth: 1, flex: 1, width: "100%" }}
          camera={{
            pitch: 1,
            zoom: 16,
            heading: 1,
            center: {
              latitude: position?.coords.latitude ?? defaultCity.coords[0],
              longitude: position?.coords.longitude ?? defaultCity.coords[1],
            },
          }}
          initialRegion={{
            latitude: defaultCity.coords[0],
            longitude: defaultCity.coords[1],
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            style={{ transform: [{ scale: 0.5 }] }}
            pinColor={colors.primary300}
            image={require("@/assets/images/Collect.png")}
            coordinate={{
              latitude: delivery.addresses.toCollect.coords[0],
              longitude: delivery.addresses.toCollect.coords[1],
            }}
          />

          <Marker
            pinColor={colors.secondary300}
            image={require("@/assets/images/Delivery.png")}
            coordinate={{
              latitude: delivery.addresses.toDelivery.coords[0],
              longitude: delivery.addresses.toDelivery.coords[1],
            }}
          />
        </MapView>
      )}

      <Box borderRadius="xl" backgroundColor="bg100" position="absolute" top={20} left={20}>
        <IconButton icon="ArrowLeft" onPress={() => router.back()} />
      </Box>

      <Box
        px="lg"
        gap="md"
        bottom={40}
        width="100%"
        alignItems="center"
        flexDirection="row"
        position="absolute"
      >
        <Box flex={1}>
          <Button>Detalhes da Entrega</Button>
        </Box>

        <Box backgroundColor="secondary300" borderRadius="xl">
          <IconButton icon="LocateFixed" color="color300" onPress={handleGoToCurrentPosition} />
        </Box>
      </Box>
    </Box>
  );
}

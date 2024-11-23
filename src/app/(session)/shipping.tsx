import { useTheme } from "@shopify/restyle";
import {
  LocationObject,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import {
  Box,
  Text,
  Icon,
  Avatar,
  Button,
  Divider,
  StepsLine,
  IconButton,
  BottomSheet,
  SectionTitle,
} from "@/components";
import { API } from "@/services/api";
import { Theme } from "@/theme";
import { customMapStyle } from "@/utils/constants/customMapStyle";
import { customDate } from "@/utils/constants/masks";
import AppContext from "@/utils/contexts/AppContext";
import { DeliveryCardProps } from "@/utils/types";

const AddressLabel = {
  0: "Coleta",
  1: "Levando para",
  2: "Entregue em",
};

const ShippingDetails = () => {
  return (
    <>
      <BottomSheet
        trigger={(props) => (
          <Box flex={1}>
            <Button {...props}>Detalhes da Entrega</Button>
          </Box>
        )}
      >
        {() => (
          <Box>
            <SectionTitle icon="Package" title="Detalhes" />

            <Box gap="md" p="md" backgroundColor="bg100" mt="md" borderRadius="sm">
              <Box mb="md" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Text variant={500} fontSize={16}>
                  <Text variant={500} color="primary300">
                    {"# "}
                  </Text>
                  AISDJJAUSDASKD
                </Text>
                <Text color="color500">{customDate(new Date())}</Text>
              </Box>

              <StepsLine status={0} />

              <Divider />

              <Box gap="sm">
                <Box flexDirection="row" alignItems="center" gap="sm">
                  <Icon icon="MapPin" size={24} color="color500" />
                  <Text color="color500">{AddressLabel[0]}</Text>
                </Box>

                <Text variant={500} textAlign="center" color="color200">
                  Av. Eremita Francisca de Jesus
                </Text>
              </Box>

              <Divider />

              <Box flexDirection="row" gap="sm">
                <Box flex={1} flexDirection="row" alignItems="center" gap="sm">
                  <Avatar name="Caio" size={60} />
                  <Box gap="xs" flex={1}>
                    <Text color="color300">Coletar com:</Text>
                    <Text variant={500} fontSize={20}>
                      Caio AReis
                    </Text>
                  </Box>
                </Box>

                <Box alignSelf="center" backgroundColor="primary300" borderRadius="xl">
                  <IconButton icon="Phone" color="bg100" />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </BottomSheet>
    </>
  );
};

export default function Shipping() {
  const colors = useTheme<Theme>().colors;
  const _mapRef = useRef<MapView | null>(null);
  const { deliveryId } = useLocalSearchParams();
  const { defaultCity } = useContext(AppContext);
  const [position, setPosition] = useState<LocationObject | null>(null);
  const DIRECTION_KEY = process.env.EXPO_PUBLIC_GOOGLE_DIRECTION_KEY ?? "";
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
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
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
          provider={PROVIDER_GOOGLE}
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

          <MapViewDirections
            origin={{
              latitude: delivery.addresses.toCollect.coords[0],
              longitude: delivery.addresses.toCollect.coords[1],
            }}
            destination={{
              latitude: delivery.addresses.toDelivery.coords[0],
              longitude: delivery.addresses.toDelivery.coords[1],
            }}
            strokeWidth={3}
            apikey={DIRECTION_KEY}
            strokeColor={colors.secondary300}
          />

          <MapViewDirections
            origin={{
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }}
            destination={{
              latitude: delivery.addresses.toCollect.coords[0],
              longitude: delivery.addresses.toCollect.coords[1],
            }}
            strokeWidth={3}
            apikey={DIRECTION_KEY}
            lineDashPattern={[8, 12]}
            strokeColor={colors.green}
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
        <ShippingDetails />

        <Box backgroundColor="secondary300" borderRadius="xl">
          <IconButton icon="LocateFixed" color="color300" onPress={handleGoToCurrentPosition} />
        </Box>
      </Box>
    </Box>
  );
}

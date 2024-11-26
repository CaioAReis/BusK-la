import { useTheme } from "@shopify/restyle";
import {
  LocationObject,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
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
  1: "Indo para",
  2: "Entregue em",
};

const UserCallLabel = {
  0: "Coletar com:",
  1: "Entregar para:",
  2: "Entregue para:",
};

const ButtonLabel = {
  0: "Confirmar Coleta",
  1: "Confirmar Entrega",
  2: "",
};

type ShippingDetailsProps = {
  delivery: DeliveryCardProps;
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryCardProps | null>>;
};

const ShippingDetails = ({ delivery, setDelivery }: ShippingDetailsProps) => {
  const { session } = useContext(AppContext);

  const user =
    delivery.status === 0 ? delivery.addresses.toCollect.user : delivery.addresses.toDelivery.user;

  const handleStartDelivery = () => {
    API.startDelivery(delivery._id).then(() =>
      setDelivery((prev) => ({ ...prev!, userId: session!._id }))
    );
  };

  const handleCollectPackege = () => {
    API.confirmCollect(delivery._id).then(() => {
      setDelivery((prev) => ({ ...prev!, status: 1 }));
    });
  };

  const handleDeliveryPackege = () => {
    API.confirmDelivery(delivery._id).then(() => {
      setDelivery((prev) => ({ ...prev!, status: 2 }));
    });
  };

  const handleCallToClient = (phone: string) => {
    router.push(`tel://${phone}`);
  };

  const handlePress = () => {
    if (!delivery.userId) return handleStartDelivery();

    if (delivery.status === 0) return handleCollectPackege();

    return handleDeliveryPackege();
  };

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
            <SectionTitle icon="Package" title="Detalhes da entrega" />

            <Box
              p="md"
              mb="lg"
              mt="md"
              gap="md"
              borderWidth={2}
              borderRadius="sm"
              position="relative"
              backgroundColor="bg100"
              borderColor={
                delivery.userId
                  ? delivery.status < 2
                    ? "secondary300"
                    : "success300"
                  : "transparent"
              }
            >
              <Box mb="md" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Text variant={500} fontSize={16}>
                  <Text variant={500} color="primary300">
                    {"# "}
                  </Text>
                  {delivery.code ?? ""}
                </Text>
                <Text color="color500">{customDate(delivery.createdAt)}</Text>
              </Box>

              <StepsLine status={delivery.status} />

              <Divider />

              <Box gap="sm">
                <Box flexDirection="row" alignItems="center" gap="sm">
                  <Icon icon="MapPin" size={24} color="color500" />
                  <Text color="color500">{AddressLabel[delivery.status]}</Text>
                </Box>

                <Text variant={500} textAlign="center" color="primary300">
                  {delivery.status === 0
                    ? delivery.addresses.toCollect.address
                    : delivery.addresses.toDelivery.address}
                </Text>
              </Box>

              <Divider />

              <Box flexDirection="row" gap="sm">
                <Box flex={1} flexDirection="row" alignItems="center" gap="sm">
                  <Avatar size={40} name={user.name ?? ""} picture={user.picture} />
                  <Box gap="xs" flex={1}>
                    <Text color="color300">{UserCallLabel[delivery.status]}</Text>
                    <Text numberOfLines={1} variant={500} fontSize={16}>
                      {user.name ?? ""}
                    </Text>
                  </Box>
                </Box>

                <Box alignSelf="center" backgroundColor="primary300" borderRadius="xl">
                  <IconButton
                    size={20}
                    icon="Phone"
                    color="bg100"
                    onPress={() => handleCallToClient(user.phone!)}
                  />
                </Box>
              </Box>

              {delivery.userId && (
                <Box
                  px="md"
                  py="xs"
                  top={-14}
                  right={8}
                  borderRadius="xl"
                  position="absolute"
                  backgroundColor={delivery.status < 2 ? "secondary300" : "success200"}
                >
                  <Text variant={500}>
                    {delivery.status < 2 ? "Entrega Iniciada" : "Entrega Realizada"}
                  </Text>
                </Box>
              )}
            </Box>

            {delivery.status < 2 && (
              <Button color="error300" onPress={handlePress}>
                {!delivery.userId ? "Iniciar Entrega" : ButtonLabel[delivery.status]}
              </Button>
            )}
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

  const StartRegion = {
    0: [position?.coords.latitude, position?.coords.longitude],
    1: delivery?.addresses.toDelivery.coords,
    2: delivery?.addresses.toDelivery.coords,
  };

  const initialRegion = {
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    latitude: StartRegion[delivery!.status]![0] ?? defaultCity.coords[0],
    longitude: StartRegion[delivery!.status]![1] ?? defaultCity.coords[1],
  };

  return (
    <Box flex={1} position="relative" backgroundColor="primaryAlpha400">
      {position && (
        <MapView
          ref={_mapRef}
          showsUserLocation
          showsCompass={false}
          showsMyLocationButton={false}
          showsPointsOfInterest={false}
          initialRegion={initialRegion}
          customMapStyle={customMapStyle}
          style={{ flex: 1, width: "100%" }}
        >
          {delivery.status !== 2 && (
            <Marker
              style={{ transform: [{ scale: 0.5 }] }}
              pinColor={colors.primary300}
              image={
                delivery.status === 1
                  ? require("@/assets/images/OnWay.png")
                  : require("@/assets/images/Collect.png")
              }
              coordinate={{
                latitude: delivery.addresses.toCollect.coords[0],
                longitude: delivery.addresses.toCollect.coords[1],
              }}
            />
          )}

          <Marker
            pinColor={colors.secondary300}
            image={
              delivery.status === 2
                ? require("@/assets/images/OnWay.png")
                : require("@/assets/images/Delivery.png")
            }
            coordinate={{
              latitude: delivery.addresses.toDelivery.coords[0],
              longitude: delivery.addresses.toDelivery.coords[1],
            }}
          />

          {delivery.status < 2 && (
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
          )}

          {delivery.status === 0 && (
            <MapViewDirections
              origin={{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              }}
              destination={{
                latitude: delivery.addresses.toCollect.coords[0],
                longitude: delivery.addresses.toCollect.coords[1],
              }}
              strokeWidth={2}
              apikey={DIRECTION_KEY}
              lineDashPattern={[2, 3]}
              strokeColor={colors.green}
            />
          )}
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
        <ShippingDetails delivery={delivery} setDelivery={setDelivery} />

        <Box backgroundColor="secondary300" borderRadius="xl">
          <IconButton icon="LocateFixed" color="color300" onPress={handleGoToCurrentPosition} />
        </Box>
      </Box>
    </Box>
  );
}

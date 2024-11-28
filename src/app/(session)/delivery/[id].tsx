import MapView, { Marker } from "react-native-maps";

import { Directions, OverMap } from "./_components";
import { useDelivery } from "./_hook/useDelivery";
import { useMarkers } from "./_hook/useMarkers";

import { Box } from "@/components";
import { customMapStyle } from "@/utils/constants/customMapStyle";

export default function Delivery() {
  const { colors, _mapRef, position, delivery, onGoBack, setDelivery, onGoToCurrentPosition } =
    useDelivery();

  const { initialRegion, collectCoords, collectPinImage, deliveryCoords, deliveryPinImage } =
    useMarkers({
      delivery,
      position,
    });

  if (!delivery || !position) return;

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
              image={collectPinImage}
              coordinate={collectCoords}
              pinColor={colors.primary300}
            />
          )}

          <Marker
            image={deliveryPinImage}
            coordinate={deliveryCoords}
            pinColor={colors.secondary300}
          />

          <Directions
            strokeWidth={3}
            hidden={delivery.status === 2}
            strokeColor={colors.secondary300}
            originCoords={delivery.addresses.toCollect.coords}
            destinationCoords={delivery.addresses.toDelivery.coords}
          />

          <Directions
            strokeWidth={2}
            lineDashPattern={[2, 3]}
            strokeColor={colors.green}
            hidden={delivery.status > 0}
            destinationCoords={delivery.addresses.toCollect.coords}
            originCoords={[position.coords.latitude, position.coords.longitude]}
          />
        </MapView>
      )}

      <OverMap
        onGoBack={onGoBack}
        delivery={delivery}
        setDelivery={setDelivery}
        handleGoToCurrentPosition={onGoToCurrentPosition}
      />
    </Box>
  );
}

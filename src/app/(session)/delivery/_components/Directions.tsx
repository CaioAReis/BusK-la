import MapViewDirections, { MapViewDirectionsProps } from "react-native-maps-directions";

type DirectionsProps = {
  hidden: boolean;
  originCoords: [number, number];
  destinationCoords: [number, number];
} & Partial<MapViewDirectionsProps>;

export function Directions({ hidden, originCoords, destinationCoords, ...rest }: DirectionsProps) {
  if (hidden) return;

  const DIRECTION_KEY = process.env.EXPO_PUBLIC_GOOGLE_DIRECTION_KEY ?? "";

  return (
    <MapViewDirections
      {...rest}
      apikey={DIRECTION_KEY}
      origin={{ latitude: originCoords[0], longitude: originCoords[1] }}
      destination={{ latitude: destinationCoords[0], longitude: destinationCoords[1] }}
    />
  );
}

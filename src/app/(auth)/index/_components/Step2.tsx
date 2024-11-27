import { Image } from "react-native";

import { Box, Text } from "@/components";
import { width } from "@/utils/constants/device";

const imageSize = width / 1.2;

export function Step2() {
  return (
    <Box px="md" width={width} alignItems="center">
      <Image
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
        source={require("@/assets/images/DeliveryMan.png")}
      />

      <Box gap="lg" width="100%">
        <Text variant={500} fontSize={35} color="color200">
          {"Entregue \nqualquer item"}
        </Text>
        <Text fontSize={18} color="color300">
          Com total segurança e acompanhamento em tempo real.
        </Text>
      </Box>
    </Box>
  );
}

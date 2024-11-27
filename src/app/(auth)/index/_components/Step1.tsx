import { Image } from "react-native";

import { Box, Text } from "@/components";
import { width } from "@/utils/constants/device";

const imageSize = width / 1.2;

export function Step1() {
  return (
    <Box px="md" width={width} alignItems="center">
      <Image
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
        source={require("@/assets/images/Delivery-Man.png")}
      />

      <Box gap="lg" width="100%">
        <Text variant={700} fontSize={35} color="color200">
          Boas vindas ao{" "}
          <Text variant={700} color="primary300">
            {"\nBusk Lá"}
          </Text>
        </Text>
        <Text fontSize={18} color="color300">
          Sua solução rápida e prática para entregas em qualquer lugar.
        </Text>
      </Box>
    </Box>
  );
}

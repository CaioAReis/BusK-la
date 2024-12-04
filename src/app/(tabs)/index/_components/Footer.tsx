import { Image } from "react-native";

import { Box, Divider, Text } from "@/components";
import { width } from "@/utils/constants/device";

const imageSize = width / 1.4;

export function Footer() {
  return (
    <Box>
      <Image
        resizeMode="contain"
        source={require("@/assets/images/Plane.png")}
        style={{ alignSelf: "center", width: imageSize, height: imageSize }}
      />

      <Box gap="ms" mb="ml">
        <Text variant={500} fontSize={20} textAlign="center">
          Aguarde mais um pouco
        </Text>
        <Text fontSize={16} textAlign="center" color="color400">
          Em breve novas entregas serão solicitadas
        </Text>
      </Box>
      <Divider color="bg300" />
    </Box>
  );
}

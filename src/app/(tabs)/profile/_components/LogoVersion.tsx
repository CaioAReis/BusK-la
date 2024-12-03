import { Image } from "react-native";

import { Box, Text } from "@/components";
import { width } from "@/utils/constants/device";

export function LogoVersion() {
  return (
    <Box alignItems="center" mt="md">
      <Image
        resizeMode="contain"
        style={{
          height: 40,
          width: width / 3.2,
        }}
        source={require("@/assets/images/logo.png")}
      />
      <Text fontSize={12}>Versão 1.0.0</Text>
    </Box>
  );
}

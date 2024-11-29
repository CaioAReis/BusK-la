import { Image } from "react-native";

import { Box, Text } from "@/components";
import { width } from "@/utils/constants/device";

const imageSize = width / 1.6;

export function EmptyHistory() {
  return (
    <Box backgroundColor="bg100" p="sm" borderRadius="sm" top={-10}>
      <Box backgroundColor="bg200" borderRadius="sm" my="xs" py="xl">
        <Image
          resizeMode="contain"
          source={require("@/assets/images/RoadsideAssistance.png")}
          style={{ alignSelf: "center", width: imageSize, height: imageSize }}
        />

        <Box gap="ms" mb="ml">
          <Text variant={500} fontSize={20} textAlign="center">
            Nada por aqui
          </Text>
          <Text fontSize={16} textAlign="center" color="color400">
            Você ainda não deu início aos trabalhos
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

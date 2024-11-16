import { Link } from "expo-router";
import { Image } from "react-native";

import { Box, Button, Text } from "@/components";
import { width } from "@/utils/constants/device";

const imageSize = width / 1.6;

export default function NotFoundScreen() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Image
        resizeMode="contain"
        source={require("@/assets/images/NotFound.png")}
        style={{ alignSelf: "center", width: imageSize, height: imageSize }}
      />

      <Box gap="ms" mb="ml" width="70%">
        <Text variant={500} fontSize={20} textAlign="center">
          Ops! Página não encontrada!
        </Text>
        <Text fontSize={16} textAlign="center" color="color400">
          Ocorreu um erro ao buscar a página
        </Text>

        <Link href="/(tabs)" asChild>
          <Button marginTop="xl">Voltar ao início</Button>
        </Link>
      </Box>
    </Box>
  );
}


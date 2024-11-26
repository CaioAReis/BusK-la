import { Image, StyleSheet } from "react-native";

import { Box, IconButton } from "@/components";
import { width } from "@/utils/constants/device";

type HeaderProps = {
  currentStep: number;
  jumpStep: (to: number) => void;
};

export function Header({ currentStep, jumpStep }: HeaderProps) {
  return (
    <Box px="md" py="sm" alignItems="center" flexDirection="row" justifyContent="space-between">
      {currentStep === 0 ? (
        <Box width={43} />
      ) : (
        <IconButton icon="ArrowLeft" onPress={() => jumpStep(currentStep - 1)} />
      )}

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("@/assets/images/logo.png")}
      />

      <Box width={43} />
    </Box>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: width / 2.5,
    marginHorizontal: 16,
  },
});

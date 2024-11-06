import { useRef, useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

import { Dot, Button, Box, Text } from "@/components";
import { height, width } from "@/utils/constants/device";
import { router } from "expo-router";

const Step1 = () => (
  <Box px="md" width={width} alignItems="center">
    <Image
      resizeMode="contain"
      style={{ width: width / 1.2, height: width / 1.2 }}
      source={require("@/assets/images/Delivery-Man.png")}
    />

    <Box gap="lg" width="100%">
      <Text fontWeight="500" fontSize={40} color="color200">
        Boas vindas ao <Text color="primary300">{"\nBusk Lá"}</Text>
      </Text>
      <Text fontSize={18} color="color300">
        Sua solução rápida e prática para entregas em qualquer lugar.
      </Text>
    </Box>
  </Box>
);

const Step2 = () => (
  <Box px="md" width={width} alignItems="center">
    <Image
      resizeMode="contain"
      style={{ width: width / 1.2, height: width / 1.2 }}
      source={require("@/assets/images/Delivery.png")}
    />

    <Box gap="lg" width="100%">
      <Text fontWeight="500" fontSize={40} color="color200">
        {"Entregue \nqualquer item"}
      </Text>
      <Text fontSize={18} color="color300">
        Com total segurança e acompanhamento em tempo real.
      </Text>
    </Box>
  </Box>
);

const Step3 = () => (
  <Box px="md" width={width} alignItems="center">
    <Image
      resizeMode="contain"
      style={{ width: width / 1.2, height: width / 1.2 }}
      source={require("@/assets/images/GPS.png")}
    />

    <Box gap="lg" width="100%">
      <Text fontWeight="500" fontSize={40} color="color200">
        {"Crie sua conta \nou faça login"}
      </Text>
      <Text fontSize={18} color="color300">
        E comece suas entregas agora mesmo.
      </Text>
    </Box>
  </Box>
);

export default function Welcome() {
  const __scrollRef = useRef<ScrollView | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const updateStep = (scrollPosition: number) => {
    const result = (scrollPosition / width).toFixed(0);
    setCurrentStep(parseInt(result, 10));
  };

  const jumpStep = () => {
    if (currentStep < 2)
      return __scrollRef.current?.scrollTo({ x: width * (currentStep + 1), animated: true });

    router.push("/(tabs)/two");
  };

  return (
    <Box gap="md" backgroundColor="bg200" flex={1}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("@/assets/images/logo.png")}
      />

      <ScrollView
        horizontal
        pagingEnabled
        ref={__scrollRef}
        showsHorizontalScrollIndicator={false}
        style={{ width, maxHeight: height / 1.6 }}
        onMomentumScrollEnd={(e) => updateStep(e.nativeEvent.contentOffset.x)}
      >
        <Step1 />
        <Step2 />
        <Step3 />
      </ScrollView>

      <Box width="100%" p="md">
        <Box mb="lg" justifyContent="center" gap="md" flexDirection="row">
          <Dot selected={currentStep === 0} />
          <Dot selected={currentStep === 1} />
          <Dot selected={currentStep === 2} />
        </Box>

        <Button onPress={jumpStep}>Continuar</Button>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    marginTop: 16,
    width: width / 2.5,
    marginHorizontal: 16,
    alignSelf: "flex-start",
  },
});

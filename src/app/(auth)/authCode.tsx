import { ArrowLeft } from "lucide-react-native";
import { useRef, useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

import { Box, Button, IconButton, Input, Text } from "@/components";
import { width } from "@/utils/constants/device";

const imageSize = width / 1.4;

const Step1 = () => (
  <Box px="ml" gap="lg" flex={1} width={width}>
    <Image
      resizeMode="contain"
      source={require("@/assets/images/Influencer.png")}
      style={{ alignSelf: "center", width: imageSize, height: imageSize }}
    />

    <Box width="100%" gap="md">
      <Text variant={600} fontSize={22} color="color200">
        Informe seu número
      </Text>
      <Text color="color200">
        Enviaremos um código de verificação de{" "}
        <Text color="primary300" variant={700}>
          6 dígitos
        </Text>
      </Text>
    </Box>

    <Input
      placeholder="Número de Telefone"
      right={
        <Text fontSize={14} variant={600} color="primary300">
          +55
        </Text>
      }
    />

    <Text textAlign="center" color="color300">
      Trocou de número?{" "}
      <Text color="primary300" variant={700}>
        Recupere sua conta
      </Text>
    </Text>
  </Box>
);

const Step2 = () => (
  <Box px="ml" gap="lg" flex={1} width={width}>
    <Image
      resizeMode="contain"
      source={require("@/assets/images/Cybersecurity.png")}
      style={{ alignSelf: "center", width: imageSize, height: imageSize }}
    />

    <Box width="100%" gap="md">
      <Text fontSize={22} variant={600} color="color200">
        Código enviado
      </Text>
      <Text color="color200">
        {"O código foi enviado para "}
        <Text color="primary300" variant={700}>
          (79) 99999-9999
        </Text>
      </Text>
    </Box>

    <Input maxLength={6} placeholder="******" style={{ textAlign: "center", letterSpacing: 12 }} />

    <Text textAlign="center" color="color300">
      Não recebeu o código?{" "}
      <Text color="primary300" variant={700}>
        Envie novamente
      </Text>
    </Text>
  </Box>
);

export default function AuthCode() {
  const __scrollRef = useRef<ScrollView | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const updateStep = (scrollPosition: number) => {
    const result = (scrollPosition / width).toFixed(0);
    setCurrentStep(parseInt(result, 10));
  };

  const jumpStep = (to: number) => {
    __scrollRef.current?.scrollTo({ x: width * to, animated: true });
  };

  return (
    <Box backgroundColor="bg200" flex={1}>
      <Box px="md" py="sm" alignItems="center" flexDirection="row" justifyContent="space-between">
        {currentStep === 0 ? (
          <Box width={44} />
        ) : (
          <IconButton icon="ArrowLeft" onPress={() => jumpStep(currentStep - 1)} />
        )}

        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("@/assets/images/logo.png")}
        />

        <Box width={44} />
      </Box>

      <Box flex={1}>
        <ScrollView
          horizontal
          pagingEnabled
          ref={__scrollRef}
          style={{ flex: 1 }}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => updateStep(e.nativeEvent.contentOffset.x)}
        >
          <Step1 />
          <Step2 />
        </ScrollView>

        <Box px="md" mb="xl">
          <Button>{currentStep === 0 ? "Enviar" : "Continuar"}</Button>
        </Box>
      </Box>
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

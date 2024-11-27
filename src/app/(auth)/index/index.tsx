import { Image, ScrollView, StyleSheet } from "react-native";

import { Footer, Step1, Step2, Step3 } from "./_components";
import { useWelcome } from "./_hooks/useWelcome";

import { Box } from "@/components";
import { height, width } from "@/utils/constants/device";

export default function Welcome() {
  const { __scrollRef, currentStep, jumpStep } = useWelcome();

  return (
    <Box gap="md" backgroundColor="bg200" flex={1} pt="md">
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("@/assets/images/logo.png")}
      />

      <ScrollView
        horizontal
        pagingEnabled
        ref={__scrollRef}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        style={{ width, maxHeight: height / 1.7 }}
      >
        <Step1 />
        <Step2 />
        <Step3 />
      </ScrollView>

      <Footer currentStep={currentStep} jumpStep={jumpStep} />
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

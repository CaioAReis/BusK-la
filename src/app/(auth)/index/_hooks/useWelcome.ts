import { router } from "expo-router";
import { useRef, useState } from "react";
import { ScrollView } from "react-native";

import { width } from "@/utils/constants/device";

export function useWelcome() {
  const __scrollRef = useRef<ScrollView | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const jumpStep = () => {
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
      return __scrollRef.current?.scrollTo({ x: width * (currentStep + 1), animated: true });
    }

    router.push("/authCode");
  };

  return { jumpStep, __scrollRef, currentStep };
}

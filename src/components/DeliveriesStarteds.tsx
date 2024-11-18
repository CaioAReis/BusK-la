import { useRef, useState } from "react";
import { ScrollView } from "react-native";

import Box from "./Box";
import { DeliveryCard } from "./DeliveryCard";
import { Dot } from "./Dot";

import { width } from "@/utils/constants/device";
import { DeliveriesStartedProps } from "@/utils/types";
import { SectionTitle } from "./SectionTitle";
import { Divider } from "./Divider";

export function DeliveriesStarted({ list }: DeliveriesStartedProps) {
  const __scrollRef = useRef<ScrollView>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const updateStep = (scrollPosition: number) => {
    const result = (scrollPosition / width).toFixed(0);
    setCurrentStep(parseInt(result, 10));
  };

  if (list.length === 0) return;

  return (
    <Box>
      <Divider color="bg300" />
      <SectionTitle icon="Package" title="Entregas Iniciadas" />
      <Box gap="sm">
        <ScrollView
          horizontal
          pagingEnabled
          ref={__scrollRef}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => updateStep(e.nativeEvent.contentOffset.x)}
        >
          <DeliveryCard width={width - 32} started />
          <DeliveryCard width={width - 32} started />
          <DeliveryCard width={width - 32} started />
        </ScrollView>

        <Box mb="md" justifyContent="center" gap="md" flexDirection="row">
          <Dot selected={currentStep === 0} />
          <Dot selected={currentStep === 1} />
          <Dot selected={currentStep === 2} />
        </Box>
      </Box>
    </Box>
  );
}

import { router } from "expo-router";
import { useRef, useState } from "react";
import { ScrollView } from "react-native";

import Box from "./Box";
import { DeliveryCard } from "./DeliveryCard";
import { Divider } from "./Divider";
import { Dot } from "./Dot";
import { SectionTitle } from "./SectionTitle";

import { width } from "@/utils/constants/device";
import { DeliveriesStartedProps } from "@/utils/types";

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
          {list.map((item) => (
            <DeliveryCard
              started
              key={item?._id}
              code={item?.code}
              width={width - 32}
              status={item?.status}
              addresses={item?.addresses}
              createdAt={item?.createdAt}
              onPress={() =>
                router.push({
                  params: { id: item?._id },
                  pathname: "/(session)/delivery/[id]",
                })
              }
            />
          ))}
        </ScrollView>

        <Box mb="md" justifyContent="center" gap="md" flexDirection="row">
          {list.map((item, i) => (
            <Dot key={i} selected={currentStep === i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

import { DeliveryDetails } from "./DeliveryDetails";

import { Box, IconButton } from "@/components";
import { DeliveryCardProps } from "@/utils/types";

type OverMapProps = {
  onGoBack: VoidFunction;
  delivery: DeliveryCardProps;
  handleGoToCurrentPosition: VoidFunction;
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryCardProps | null>>;
};

export function OverMap({
  delivery,
  onGoBack,
  setDelivery,
  handleGoToCurrentPosition,
}: OverMapProps) {
  return (
    <>
      <Box borderRadius="xl" backgroundColor="bg100" position="absolute" top={20} left={20}>
        <IconButton icon="ArrowLeft" onPress={onGoBack} />
      </Box>

      <Box
        px="lg"
        gap="md"
        bottom={40}
        width="100%"
        alignItems="center"
        flexDirection="row"
        position="absolute"
      >
        <DeliveryDetails delivery={delivery} setDelivery={setDelivery} />

        <Box backgroundColor="secondary300" borderRadius="xl">
          <IconButton icon="LocateFixed" color="color300" onPress={handleGoToCurrentPosition} />
        </Box>
      </Box>
    </>
  );
}

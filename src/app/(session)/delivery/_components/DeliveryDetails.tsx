import { useDeliveryDetails } from "../_hook/useDeliveryDetails";

import {
  Box,
  Icon,
  Text,
  Avatar,
  Button,
  Divider,
  StepsLine,
  IconButton,
  BottomSheet,
  SectionTitle,
} from "@/components";
import { customDate } from "@/utils/constants/masks";
import { DeliveryCardProps } from "@/utils/types";

const AddressLabel = {
  0: "Coleta",
  1: "Indo para",
  2: "Entregue em",
};

const UserCallLabel = {
  0: "Coletar com:",
  1: "Entregar para:",
  2: "Entregue para:",
};

const ButtonLabel = {
  0: "Confirmar Coleta",
  1: "Confirmar Entrega",
  2: "",
};

export type ShippingDetailsProps = {
  delivery: DeliveryCardProps;
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryCardProps | null>>;
};

export function DeliveryDetails({ delivery, setDelivery }: ShippingDetailsProps) {
  const { user, handleDeliveryChange, currentDelivery, handleCallToClient } = useDeliveryDetails({
    delivery,
    setDelivery,
  });

  return (
    <>
      <BottomSheet
        trigger={(props) => (
          <Box flex={1}>
            <Button {...props}>Detalhes da Entrega</Button>
          </Box>
        )}
      >
        {() => (
          <Box>
            <SectionTitle icon="Package" title="Detalhes da entrega" />

            <Box
              p="md"
              mb="lg"
              mt="md"
              gap="md"
              borderWidth={2}
              borderRadius="sm"
              position="relative"
              backgroundColor="bg100"
              borderColor={
                delivery.userId
                  ? delivery.status < 2
                    ? "secondary300"
                    : "success300"
                  : "transparent"
              }
            >
              <Box mb="md" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Text variant={500} fontSize={16}>
                  <Text variant={500} color="primary300">
                    {"# "}
                  </Text>
                  {delivery.code ?? ""}
                </Text>
                <Text color="color500">{customDate(delivery.createdAt)}</Text>
              </Box>

              <StepsLine status={delivery.status} />

              <Divider />

              <Box gap="sm">
                <Box flexDirection="row" alignItems="center" gap="sm">
                  <Icon icon="MapPin" size={24} color="color500" />
                  <Text color="color500">{AddressLabel[delivery.status]}</Text>
                </Box>

                <Text variant={500} textAlign="center" color="primary300">
                  {currentDelivery.address}
                </Text>
              </Box>

              <Divider />

              <Box flexDirection="row" gap="sm">
                <Box flex={1} flexDirection="row" alignItems="center" gap="sm">
                  <Avatar size={40} name={user.name ?? ""} picture={user.picture} />
                  <Box gap="xs" flex={1}>
                    <Text color="color300">{UserCallLabel[delivery.status]}</Text>
                    <Text numberOfLines={1} variant={500} fontSize={16}>
                      {user.name ?? ""}
                    </Text>
                  </Box>
                </Box>

                <Box alignSelf="center" backgroundColor="primary300" borderRadius="xl">
                  <IconButton
                    size={20}
                    icon="Phone"
                    color="bg100"
                    onPress={() => handleCallToClient(user.phone!)}
                  />
                </Box>
              </Box>

              {delivery.userId && (
                <Box
                  px="md"
                  py="xs"
                  top={-14}
                  right={8}
                  borderRadius="xl"
                  position="absolute"
                  backgroundColor={delivery.status < 2 ? "secondary300" : "success200"}
                >
                  <Text variant={500}>
                    {delivery.status < 2 ? "Entrega Iniciada" : "Entrega Realizada"}
                  </Text>
                </Box>
              )}
            </Box>

            {delivery.status < 2 && (
              <Button color="error300" onPress={handleDeliveryChange}>
                {!delivery.userId ? "Iniciar Entrega" : ButtonLabel[delivery.status]}
              </Button>
            )}
          </Box>
        )}
      </BottomSheet>
    </>
  );
}

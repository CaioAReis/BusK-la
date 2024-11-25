import { router } from "expo-router";
import { icons } from "lucide-react-native";
import { useContext, useEffect, useState } from "react";
import { FlatList, Image } from "react-native";

import { Avatar, Box, DeliveryCard, Icon, SectionTitle, Text } from "@/components";
import { API } from "@/services/api";
import { width } from "@/utils/constants/device";
import AppContext from "@/utils/contexts/AppContext";
import { DeliveryCardProps } from "@/utils/types";

type BoxInfoProps = {
  value: string;
  label: string;
  icon: keyof typeof icons;
};

const BoxInfo = ({ icon, value, label }: BoxInfoProps) => (
  <Box
    p="ms"
    gap="ms"
    borderRadius="md"
    flexDirection="row"
    alignItems="center"
    backgroundColor="primaryAlpha500"
  >
    <Icon icon={icon} size={30} color="primary300" />

    <Box gap="xs">
      <Text variant={500} fontSize={18}>
        {value}
      </Text>

      <Text fontSize={12} color="color500">
        {label}
      </Text>
    </Box>
  </Box>
);

const imageSize = width / 1.6;

export default function History() {
  const { session } = useContext(AppContext);
  const [list, setList] = useState<DeliveryCardProps[]>([]);

  useEffect(() => {
    API.getDeliveryHistory(session!._id).then((result) => {
      setList(result.list);
    });
  }, []);

  return (
    <Box backgroundColor="bg200" flex={1} px="md">
      <FlatList
        data={list}
        keyExtractor={({ _id }) => _id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Box height={90} />}
        renderItem={({ item }) => (
          <DeliveryCard
            code={item?.code}
            status={item?.status}
            addresses={item?.addresses}
            createdAt={item?.createdAt}
            onPress={() =>
              router.push({
                pathname: "/(session)/shipping",
                params: { deliveryId: item?._id },
              })
            }
          />
        )}
        ListEmptyComponent={
          <Box backgroundColor="bg100" p="sm" borderRadius="sm" top={-10}>
            <Box backgroundColor="bg200" borderRadius="sm" my="xs" py="xl">
              <Image
                resizeMode="contain"
                source={require("@/assets/images/RoadsideAssistance.png")}
                style={{ alignSelf: "center", width: imageSize, height: imageSize }}
              />

              <Box gap="ms" mb="ml">
                <Text variant={500} fontSize={20} textAlign="center">
                  Nada por aqui
                </Text>
                <Text fontSize={16} textAlign="center" color="color400">
                  Você ainda não deu início aos trabalhos
                </Text>
              </Box>
            </Box>
          </Box>
        }
        ListHeaderComponent={
          <Box borderWidth={0} g="sm" mt="ml">
            <Box mt="md" backgroundColor="bg100" p="md" borderRadius="sm" gap="ml">
              <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                <Box flex={1} alignItems="center" gap="md">
                  <Avatar name={session?.name || ""} picture={session?.picture || ""} />
                  <Text variant={500} fontSize={16}>
                    {session?.name || ""}
                  </Text>
                </Box>

                <Box flex={1} alignItems="center">
                  <Text variant={500} fontSize={40} color="color200" mb="ms">
                    {session?.AVGRating ?? 0.0}
                  </Text>

                  <Box gap="sm" flexDirection="row" width="100%" justifyContent="center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        size={20}
                        key={star}
                        icon="Star"
                        color={(session?.AVGRating ?? star < 0.0) ? "secondary300" : "bg400"}
                      />
                    ))}
                  </Box>

                  <Text fontSize={12} color="bg500" mt="sm">
                    {session?.totalRatings} avaliações
                  </Text>
                </Box>
              </Box>

              {list.length > 0 && (
                <Box flexDirection="row" gap="ms">
                  <Box gap="ms" flex={1}>
                    <BoxInfo
                      icon="PackageCheck"
                      label="Entregas totais"
                      value={`${session?.totalDeliveries}`}
                    />
                    <BoxInfo
                      icon="Timer"
                      label="Tempo médio"
                      value={`${session?.deliveryTime} min`}
                    />
                  </Box>

                  <Box
                    flex={1}
                    borderRadius="md"
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="primaryAlpha500"
                  >
                    <Icon icon="TrafficCone" size={50} color="primary300" />

                    <Box gap="xs" mt="md" alignItems="center">
                      <Text variant={500} fontSize={16}>
                        {session?.totalKM} km
                      </Text>

                      <Text fontSize={12} color="color500">
                        Distância Percorrida
                      </Text>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>

            {list.length > 0 && <SectionTitle icon="PackageCheck" title="Histórico de Entregas" />}
          </Box>
        }
      />
    </Box>
  );
}

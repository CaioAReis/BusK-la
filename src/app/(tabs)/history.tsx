import { icons } from "lucide-react-native";
import { useState } from "react";
import { FlatList, Image } from "react-native";

import { Avatar, Box, DeliveryCard, Icon, SectionTitle, Text } from "@/components";
import { width } from "@/utils/constants/device";

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
  const [list, setList] = useState([]);

  return (
    <Box backgroundColor="bg200" flex={1} px="md">
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Box height={90} />}
        renderItem={({ item }) => <DeliveryCard status={2} />}
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
          <Box borderWidth={0} g="sm">
            <Box mt="md" backgroundColor="bg100" p="md" borderRadius="sm" gap="ml">
              <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                <Box flex={1} alignItems="center" gap="md">
                  <Avatar name="Caio" />
                  <Text variant={500} fontSize={16}>
                    Caio AReis
                  </Text>
                </Box>

                <Box flex={1} alignItems="center">
                  <Text variant={500} fontSize={40} color="color200" mb="ms">
                    3.75
                  </Text>

                  <Box gap="sm" flexDirection="row" width="100%" justifyContent="center">
                    <Icon icon="Star" size={20} color="secondary300" />
                    <Icon icon="Star" size={20} color="secondary300" />
                    <Icon icon="Star" size={20} color="secondary300" />
                    <Icon icon="Star" size={20} color="secondary300" />
                    <Icon icon="Star" size={20} color="secondary300" />
                  </Box>

                  <Text fontSize={12} color="bg500" mt="sm">
                    1.946 avaliações
                  </Text>
                </Box>
              </Box>

              {list.length > 0 && (
                <Box flexDirection="row" gap="ms">
                  <Box gap="ms" flex={1}>
                    <BoxInfo icon="PackageCheck" value="10" label="Entregas totais" />
                    <BoxInfo icon="Timer" value="14 min" label="Tempo médio" />
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
                        34.286 km
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

import { router } from "expo-router";
import { useContext, useState } from "react";
import { FlatList, Image } from "react-native";

import {
  Box,
  Text,
  Avatar,
  Divider,
  SectionTitle,
  DeliveryCard,
  Notifications,
  DeliveriesStarted,
} from "@/components";
// import { DeliveryCardProps } from "@/components/DeliveryCard";
import { width } from "@/utils/constants/device";
import AppContext from "@/utils/contexts/AppContext";
import { DATA } from "@/utils/data";
import { DeliveryCardProps } from "@/utils/types";

const imageSize = width / 1.4;

export default function Home() {
  const { session } = useContext(AppContext);
  const [list, setList] = useState<DeliveryCardProps[]>([]);

  if (!session) return router.replace("/(auth)");

  return (
    <Box backgroundColor="bg200" flex={1} px="md">
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Box height={90} />}
        renderItem={({ item }) => <DeliveryCard />}
        ListEmptyComponent={
          <Box>
            <Image
              resizeMode="contain"
              source={require("@/assets/images/Plane.png")}
              style={{ alignSelf: "center", width: imageSize, height: imageSize }}
            />

            <Box gap="ms" mb="ml">
              <Text variant={500} fontSize={20} textAlign="center">
                Aguarde mais um pouco
              </Text>
              <Text fontSize={16} textAlign="center" color="color400">
                Em breve novas entregas serão solicitadas
              </Text>
            </Box>
            <Divider color="bg300" />
          </Box>
        }
        ListHeaderComponent={
          <Box gap="xs">
            <Box gap="sm" flexDirection="row" alignItems="center" my="md">
              <Avatar name={session.name} size={60} />

              <Box gap="xs" flex={1}>
                <Text variant={500} color="color200" fontSize={24}>
                  {session.name}
                </Text>
                <Text color="color400">{session.email}</Text>
              </Box>

              <Notifications />
            </Box>

            <Box>
              <Divider color="bg300" />
              <Box>
                <SectionTitle icon="Package" title="Entregas Iniciadas" />
                <DeliveriesStarted />
              </Box>
            </Box>

            <Divider color="bg300" />

            <SectionTitle icon="PackagePlus" title="Entregas Solicitadas" />
          </Box>
        }
      />
    </Box>
  );
}

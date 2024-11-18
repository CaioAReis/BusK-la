import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
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
import { API } from "@/services/api";
import { width } from "@/utils/constants/device";
import AppContext from "@/utils/contexts/AppContext";
import { DeliveryCardProps } from "@/utils/types";

const imageSize = width / 1.4;

export default function Home() {
  const { session } = useContext(AppContext);
  const [list, setList] = useState<DeliveryCardProps[]>([]);
  const [deliveryStarteds, setDeliveryStarteds] = useState<DeliveryCardProps[]>([]);

  const getDeliveries = () => {
    API.getDeliveryList()
      .then((result) => {
        setList(result.list);
      })
      .catch((error) => console.error(error));
  };

  const getUserDeliveries = (userId: string) => {
    API.getUserDeliveryList()
      .then((result) => {
        setDeliveryStarteds(result.list);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    // setIsLoading(true);
    getDeliveries();
    getUserDeliveries(session!._id);
  }, []);

  if (!session) return router.replace("/(auth)");

  return (
    <Box backgroundColor="bg200" flex={1} px="md">
      <FlatList
        keyExtractor={({ _id }) => _id}
        data={list as DeliveryCardProps[]}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Box height={90} />}
        renderItem={({ item }) => (
          <DeliveryCard
            code={item?.code}
            status={item?.status}
            addresses={item?.addresses}
            createdAt={item?.createdAt}
          />
        )}
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
              <Avatar name={session.name} picture={session.picture} size={60} />

              <Box gap="xs" flex={1}>
                <Text variant={500} color="color200" fontSize={24}>
                  {session.name}
                </Text>
                <Text color="color400">{session.email}</Text>
              </Box>

              <Notifications />
            </Box>

            <DeliveriesStarted list={deliveryStarteds} />

            <Divider color="bg300" />

            <SectionTitle icon="PackagePlus" title="Entregas Solicitadas" />
          </Box>
        }
      />
    </Box>
  );
}

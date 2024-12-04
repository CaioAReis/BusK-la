import { router } from "expo-router";
import { FlatList } from "react-native";

import { Footer, Header } from "./_components";
import { useHome } from "./_hooks/useHome";

import { Box, Divider, SectionTitle, DeliveryCard, DeliveriesStarted } from "@/components";
import { DeliveryCardProps } from "@/utils/types";

export default function Home() {
  const { session, list, deliveryStarteds } = useHome();

  if (!session) return router.replace("/(auth)");

  return (
    <Box backgroundColor="bg200" flex={1} px="md">
      <FlatList
        keyExtractor={({ _id }) => _id}
        ListEmptyComponent={<Footer />}
        data={list as DeliveryCardProps[]}
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
                params: { id: item?._id },
                pathname: "/(session)/delivery/[id]",
              })
            }
          />
        )}
        ListHeaderComponent={
          <Box gap="xs" mt="ml">
            <Header session={session} />

            <DeliveriesStarted list={deliveryStarteds} />

            <Divider color="bg300" />

            <SectionTitle icon="PackagePlus" title="Entregas Solicitadas" />
          </Box>
        }
      />
    </Box>
  );
}

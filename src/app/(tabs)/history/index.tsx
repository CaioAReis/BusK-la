import { router } from "expo-router";
import { FlatList } from "react-native";

import { EmptyHistory, UserDeliveryInfo, UserRating } from "./_components";
import { useHistory } from "./_hooks/usehistory";

import { Box, DeliveryCard, SectionTitle } from "@/components";

export default function History() {
  const { list, session } = useHistory();

  return (
    <Box backgroundColor="bg200" flex={1} px="md">
      <FlatList
        data={list}
        keyExtractor={({ _id }) => _id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyHistory />}
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
          <Box borderWidth={0} g="sm" mt="ml">
            <Box mt="md" backgroundColor="bg100" p="md" borderRadius="sm" gap="ml">
              <UserRating
                name={session?.name ?? ""}
                picture={session?.picture ?? ""}
                AVGRating={session?.AVGRating ?? 0}
                totalRatings={session?.totalRatings ?? 0}
              />

              {list.length > 0 && (
                <UserDeliveryInfo
                  totalKM={session?.totalKM ?? 0}
                  deliveryTime={session?.deliveryTime ?? 0}
                  totalDeliveries={session?.totalDeliveries ?? 0}
                />
              )}
            </Box>

            {list.length > 0 && <SectionTitle icon="PackageCheck" title="Histórico de Entregas" />}
          </Box>
        }
      />
    </Box>
  );
}

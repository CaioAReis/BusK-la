import { Avatar, Box, Divider, Notifications, Text } from "@/components";

export default function Home() {
  return (
    <Box backgroundColor="bg200" flex={1} px="md" gap="xs">
      <Box gap="sm" flexDirection="row" alignItems="center" my="md">
        <Avatar name="Caio" size={60} />

        <Box gap="sm" flex={1}>
          <Text variant={500} color="color200" fontSize={24}>
            Caio AReis
          </Text>
          <Text color="color400">CaioAReis@mail.com</Text>
        </Box>

        <Notifications />
      </Box>

      <Divider color="bg300" />
    </Box>
  );
}

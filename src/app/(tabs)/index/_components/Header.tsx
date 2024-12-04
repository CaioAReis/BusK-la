import { Avatar, Box, Notifications, Text } from "@/components";
import { UserData } from "@/utils/types";

export function Header({ session }: { session: UserData }) {
  return (
    <Box gap="sm" flexDirection="row" alignItems="center" my="md">
      <Avatar name={session?.name ?? ""} picture={session?.picture ?? ""} size={60} />

      <Box gap="xs" flex={1}>
        <Text variant={500} color="color200" fontSize={24}>
          {session?.name ?? ""}
        </Text>
        <Text color="color400">{session?.email ?? ""}</Text>
      </Box>

      <Notifications />
    </Box>
  );
}

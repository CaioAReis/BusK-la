import Box from "./Box";
import Text from "./Text";

import { customDate } from "@/utils/constants/masks";
import { NotificationCardProps } from "@/utils/types";

export function NotificationCard({ title, body, createdAt, isNew }: NotificationCardProps) {
  return (
    <Box backgroundColor={isNew ? "bg100" : "bg200"} p="md" gap="md" borderRadius="md">
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text numberOfLines={1} variant={500} fontSize={18}>
          {title}
        </Text>
        <Text color="color500" fontSize={12}>
          {customDate(createdAt)}
        </Text>
      </Box>

      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box flex={1}>
          <Text color="color300">{body}</Text>
        </Box>
        {isNew && (
          <Box ml="xs" width={12} height={12} backgroundColor="error300" borderRadius="md" />
        )}
      </Box>
    </Box>
  );
}

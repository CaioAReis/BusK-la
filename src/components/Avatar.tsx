import Box from "./Box";
import Text from "./Text";

import { AvatarProps } from "@/utils/types";

export function Avatar({ name, size }: AvatarProps) {
  return (
    <Box
      width={size ?? 80}
      height={size ?? 80}
      borderRadius="xl"
      alignItems="center"
      justifyContent="center"
      backgroundColor="primary300"
    >
      <Text fontSize={(size ?? 80) / 2.2} color="bg100" variant={500}>
        {name[0].toUpperCase()}
      </Text>
    </Box>
  );
}

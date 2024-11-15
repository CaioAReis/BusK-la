import Box from "./Box";
import { Icon } from "./Icon";
import Text from "./Text";

import { SectionTitleProps } from "@/utils/types";

export function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <Box mt="ml" mb="md" flexDirection="row" alignItems="center" gap="ms">
      <Icon icon={icon ?? "Cat"} color="color300" />
      <Text variant={500} fontSize={20} color="color300">
        {title}
      </Text>
    </Box>
  );
}

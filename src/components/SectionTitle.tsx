import { icons } from "lucide-react-native";

import Box from "./Box";
import { Icon } from "./Icon";
import Text from "./Text";

type SectionTitleProps = {
  title: string;
  icon: keyof typeof icons;
};

export function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <Box my="ml" flexDirection="row" alignItems="center" gap="ms">
      <Icon icon={icon ?? "Cat"} color="color300" />
      <Text variant={500} fontSize={20} color="color300">
        {title}
      </Text>
    </Box>
  );
}

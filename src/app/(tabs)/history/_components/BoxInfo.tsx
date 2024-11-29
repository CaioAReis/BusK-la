import { icons } from "lucide-react-native";

import { Box, Icon, Text } from "@/components";

type BoxInfoProps = {
  value: string;
  label: string;
  icon: keyof typeof icons;
};

export function BoxInfo({ icon, value, label }: BoxInfoProps) {
  return (
    <Box
      p="ms"
      gap="ms"
      borderRadius="md"
      flexDirection="row"
      alignItems="center"
      backgroundColor="primaryAlpha500"
    >
      <Icon icon={icon} size={30} color="primary300" />

      <Box gap="xs">
        <Text variant={500} fontSize={18}>
          {value}
        </Text>

        <Text fontSize={12} color="color500">
          {label}
        </Text>
      </Box>
    </Box>
  );
}

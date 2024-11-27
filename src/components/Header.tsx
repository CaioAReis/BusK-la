import Box from "./Box";
import { IconButton } from "./IconButton";
import Text from "./Text";

type HeaderProps = {
  title?: string;
  description?: string;
  onGoback: VoidFunction;
};

export function Header({ title, description, onGoback }: HeaderProps) {
  return (
    <Box p="md" gap="ms">
      <IconButton icon="ArrowLeft" onPress={onGoback} />

      <Box gap="sm">
        <Text variant={500} color="color200" fontSize={32}>
          {title}
        </Text>

        {description && <Text color="color300">{description}</Text>}
      </Box>
    </Box>
  );
}

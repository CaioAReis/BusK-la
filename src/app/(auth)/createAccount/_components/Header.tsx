import { Box, IconButton, Text } from "@/components";

type HeaderProps = {
  onGoback: VoidFunction;
};

export function Header({ onGoback }: HeaderProps) {
  return (
    <Box p="md" gap="ms">
      <IconButton icon="ArrowLeft" onPress={onGoback} />

      <Box gap="sm">
        <Text variant={500} color="color200" fontSize={32}>
          Criar conta
        </Text>
        <Text color="color300">Preencha com suas informações pessoais</Text>
      </Box>
    </Box>
  );
}

import { LogoVersion } from "./LogoVersion";

import { BottomSheet, Box, Divider, MostText, Option, SectionTitle, Text } from "@/components";

export function OthersSettings() {
  return (
    <Box gap="md">
      <Text variant={700} fontSize={24} color="color200">
        Outros
      </Text>

      <Box borderRadius="sm" overflow="hidden" backgroundColor="bg100">
        <BottomSheet
          trigger={(props) => (
            <Option {...props} leftIcon="Info">
              Sobrel
            </Option>
          )}
        >
          {() => (
            <Box borderRadius="md" overflow="hidden" mt="md">
              <SectionTitle title="Sobre" icon="Info" />

              <LogoVersion />

              <Box borderRadius="sm" p="sm" backgroundColor="bg100" mt="md">
                <MostText />
              </Box>
            </Box>
          )}
        </BottomSheet>

        <Divider width="85%" alignSelf="flex-end" />

        <BottomSheet
          trigger={(props) => (
            <Option {...props} leftIcon="BookOpenText">
              Termos de uso
            </Option>
          )}
        >
          {() => (
            <Box borderRadius="md" overflow="hidden" mt="md">
              <SectionTitle title="Termos de uso" icon="BookOpenText" />

              <Box borderRadius="sm" p="sm" backgroundColor="bg100" mt="md">
                <MostText />
              </Box>
            </Box>
          )}
        </BottomSheet>

        <Divider width="85%" alignSelf="flex-end" />

        <BottomSheet
          trigger={(props) => (
            <Option {...props} leftIcon="LockKeyholeOpen">
              Políticas de Privacidade
            </Option>
          )}
        >
          {() => (
            <Box borderRadius="md" overflow="hidden" mt="md">
              <SectionTitle title="Políticas de Privacidade" icon="LockKeyholeOpen" />

              <Box borderRadius="sm" p="sm" backgroundColor="bg100" mt="md">
                <MostText />
              </Box>
            </Box>
          )}
        </BottomSheet>
      </Box>
    </Box>
  );
}

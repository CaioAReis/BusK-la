import { useContext } from "react";
import { Image, ScrollView, Switch } from "react-native";

import { Avatar, Box, Divider, Option, Text } from "@/components";
import { width } from "@/utils/constants/device";
import AppContext from "@/utils/contexts/AppContext";

export default function Profile() {
  const { session, isDark, setIsDark } = useContext(AppContext);

  return (
    <Box flex={1} backgroundColor="bg200">
      <ScrollView>
        <Box px="md" gap="lg">
          <Box gap="sm" flexDirection="row" alignItems="center" my="md">
            <Avatar name={session?.name ?? ""} picture={session?.picture ?? ""} size={60} />

            <Box gap="xs" flex={1}>
              <Text variant={500} color="color200" fontSize={24}>
                {session?.name ?? ""}
              </Text>
              <Text color="color400">{session?.email ?? ""}</Text>
            </Box>
          </Box>

          <Box gap="md">
            <Text variant={700} fontSize={24} color="color200">
              Geral
            </Text>

            <Box borderRadius="sm" overflow="hidden" backgroundColor="bg100">
              <Option leftIcon="UserRound">Editar Perfil</Option>

              <Divider width="85%" alignSelf="flex-end" />

              <Option
                leftIcon="Moon"
                right={<Switch value={isDark} onChange={(e) => setIsDark(e.nativeEvent.value)} />}
              >
                Tema escuro
              </Option>

              <Divider width="85%" alignSelf="flex-end" />

              <Option leftIcon="MapPinHouse" right={<Text color="color300">Lagarto - SE</Text>}>
                Cidade
              </Option>
            </Box>
          </Box>

          <Box gap="md">
            <Text variant={700} fontSize={24} color="color200">
              Outros
            </Text>

            <Box borderRadius="sm" overflow="hidden" backgroundColor="bg100">
              <Option leftIcon="Info">Sobrel</Option>

              <Divider width="85%" alignSelf="flex-end" />

              <Option leftIcon="BookOpenText">Termos de uso</Option>

              <Divider width="85%" alignSelf="flex-end" />

              <Option leftIcon="LockKeyholeOpen">Políticas de Privacidade</Option>
            </Box>
          </Box>

          <Box borderRadius="sm" overflow="hidden">
            <Option color="error300" leftIcon="LogOut">
              Sair
            </Option>
          </Box>

          <Box alignItems="center" mt="md">
            <Image
              resizeMode="contain"
              style={{
                height: 40,
                width: width / 3.2,
              }}
              source={require("@/assets/images/logo.png")}
            />
            <Text fontSize={12}>Versão 1.0.0</Text>
          </Box>

          <Box height={100} />
        </Box>
      </ScrollView>
    </Box>
  );
}

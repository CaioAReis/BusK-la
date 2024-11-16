import { Image, ScrollView, Switch } from "react-native";

import { Avatar, Box, Divider, Option, Text } from "@/components";
import { width } from "@/utils/constants/device";

export default function Profile() {
  return (
    <ScrollView>
      <Box flex={1} px="md" gap="lg">
        <Box gap="sm" flexDirection="row" alignItems="center" my="md">
          <Avatar name="Caio" size={60} />

          <Box gap="xs" flex={1}>
            <Text variant={500} color="color200" fontSize={24}>
              Caio AReis
            </Text>
            <Text color="color400">CaioAReis@mail.com</Text>
          </Box>
        </Box>

        <Box gap="md">
          <Text variant={700} fontSize={24} color="color200">
            Geral
          </Text>

          <Box borderRadius="sm" overflow="hidden" backgroundColor="bg100">
            <Option leftIcon="UserRound">Editar Perfil</Option>

            <Divider width="85%" alignSelf="flex-end" />

            <Option leftIcon="Moon" right={<Switch />}>
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
  );
}

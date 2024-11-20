import { router } from "expo-router";
import { useCallback, useContext, useState } from "react";
import { Image, Modal, Pressable, ScrollView, Switch } from "react-native";

import {
  Box,
  Text,
  Button,
  Avatar,
  Option,
  Divider,
  MostText,
  BottomSheet,
  SectionTitle,
} from "@/components";
import { width } from "@/utils/constants/device";
import AppContext from "@/utils/contexts/AppContext";
import { DATA } from "@/utils/data";
import { City } from "@/utils/types";

const imageSize = width / 2.2;

const LogoVersion = () => (
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
);

const LogOutModal = () => {
  const { setSession } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => setIsOpen(true), []);
  const handleCloseModal = useCallback(() => setIsOpen(false), []);

  const handleLogOut = () => {
    //  Limpar localStorage

    handleCloseModal();
    router.push("/(auth)/authCode");
    setSession(null);
  };

  return (
    <>
      <Box borderRadius="sm" overflow="hidden">
        <Option color="error300" leftIcon="LogOut" onPress={handleOpenModal}>
          Sair
        </Option>
      </Box>

      <Modal visible={isOpen} transparent onRequestClose={handleCloseModal}>
        <Pressable
          onPress={handleCloseModal}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00000060",
          }}
        >
          <Box
            p="md"
            gap="sm"
            width="80%"
            borderRadius="sm"
            alignItems="center"
            backgroundColor="bg200"
          >
            <Image
              resizeMode="contain"
              source={require("@/assets/images/Failure.png")}
              style={{ alignSelf: "center", width: imageSize, height: imageSize }}
            />

            <Text variant={500} fontSize={16}>
              Sair da conta?
            </Text>
            <Text>Você realmente deseja sair da conta?</Text>

            <Button onPress={handleLogOut} marginBottom="md" marginTop="ml" paddingHorizontal="lg">
              Sair da conta
            </Button>
          </Box>
        </Pressable>
      </Modal>
    </>
  );
};

export default function Profile() {
  const { session, isDark, setIsDark, defaultCity, setDefaultCity } = useContext(AppContext);

  const [cities, setCities] = useState<City[]>([]);

  const getCities = () => {
    setCities(DATA.citiesToWork);
  };

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
              <Option onPress={() => router.push("/(session)/editProfile")} leftIcon="UserRound">
                Editar Perfil
              </Option>

              <Divider width="85%" alignSelf="flex-end" />

              <Option
                leftIcon="Moon"
                right={<Switch value={isDark} onChange={(e) => setIsDark(e.nativeEvent.value)} />}
              >
                Tema escuro
              </Option>

              <Divider width="85%" alignSelf="flex-end" />

              <BottomSheet
                onOpen={getCities}
                trigger={(props) => (
                  <Option
                    {...props}
                    leftIcon="MapPinHouse"
                    right={<Text color="color300">{defaultCity.name}</Text>}
                  >
                    Cidade
                  </Option>
                )}
              >
                {() => (
                  <Box borderRadius="md" overflow="hidden" mt="md">
                    {cities.map((city) => (
                      <Option
                        key={city._id}
                        selected={defaultCity === city}
                        onPress={() => setDefaultCity(city)}
                      >
                        {city.name}
                      </Option>
                    ))}
                  </Box>
                )}
              </BottomSheet>
            </Box>
          </Box>

          <Box gap="md">
            <Text variant={700} fontSize={24} color="color200">
              Outros
            </Text>

            <Box borderRadius="sm" overflow="hidden" backgroundColor="bg100">
              <BottomSheet
                onOpen={getCities}
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
                onOpen={getCities}
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
                onOpen={getCities}
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

          <LogOutModal />

          <LogoVersion />

          <Box height={100} />
        </Box>
      </ScrollView>
    </Box>
  );
}

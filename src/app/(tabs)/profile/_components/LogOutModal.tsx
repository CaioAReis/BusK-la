import { router } from "expo-router";
import { useCallback, useContext, useState } from "react";
import { Image, Modal, Pressable } from "react-native";

import { Box, Button, Option, Text } from "@/components";
import { width } from "@/utils/constants/device";
import AppContext from "@/utils/contexts/AppContext";

const imageSize = width / 2.2;

export function LogOutModal() {
  const { setSession } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => setIsOpen(true), []);
  const handleCloseModal = useCallback(() => setIsOpen(false), []);

  const handleLogOut = () => {
    //  Clear user on localStorage
    handleCloseModal();
    router.push("/(auth)/authCode");
    setSession(null);
  };

  return (
    <>
      <Box borderRadius="sm" overflow="hidden">
        <Option color="error400" leftIcon="LogOut" onPress={handleOpenModal}>
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
}

import { Keyboard, KeyboardAvoidingView, ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { useUpdateAccount } from "./_hooks/useUpdateAccount";

import { UserForm } from "@/app/(auth)/createAccount/_components";
import { Box, Header } from "@/components";

export default function EditProfile() {
  const { control, errors, handleSubmit, handleGoBack, onSubmit } = useUpdateAccount();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box backgroundColor="bg200">
          <ScrollView>
            <Box backgroundColor="bg200" flex={1}>
              <Header title="Editar perfil" onGoback={handleGoBack} />

              <UserForm control={control} errors={errors} onSubmit={handleSubmit(onSubmit)} />
            </Box>
          </ScrollView>
        </Box>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

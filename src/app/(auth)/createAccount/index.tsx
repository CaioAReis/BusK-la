import { Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

import { UserForm } from "./_components";
import { useCreateUser } from "./_hooks/useCreateUser";

import { Box, Header } from "@/components";

export default function CreateAccount() {
  const { control, errors, handleSubmit, handleGoBack, onSubmit } = useCreateUser();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ flex: 1 }}>
          <Box backgroundColor="bg200" flex={1}>
            <Header
              title="Criar conta"
              onGoback={handleGoBack}
              description="Preencha com suas informações pessoais"
            />

            <UserForm control={control} errors={errors} onSubmit={handleSubmit(onSubmit)} />
          </Box>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

import { Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

import { CreateUserForm, Header } from "./_components";
import { useCreateUser } from "./_hooks/useCreateUser";

import { Box } from "@/components";

export default function CreateAccount() {
  const { control, errors, handleSubmit, handleGoBack, onSubmit } = useCreateUser();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ flex: 1 }}>
          <Box backgroundColor="bg200" flex={1}>
            <Header onGoback={handleGoBack} />

            <CreateUserForm control={control} errors={errors} onSubmit={handleSubmit(onSubmit)} />
          </Box>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

import { Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

import { CodeStep, Header, PhoneStep } from "./_components";
import { useAuthCode } from "./_hooks/useAuthCode";
import { useAuthForm } from "./_hooks/useAuthForm";

import { Box, Button } from "@/components";
import { isAndroid } from "@/utils/constants/device";

export default function AuthCode() {
  const { control, errors, handleSubmit, watch } = useAuthForm();
  const { jumpStep, onSubmit, updateStep, currentStep, __scrollRef } = useAuthCode();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={isAndroid ? "height" : "padding"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box backgroundColor="bg200" flex={1} mt="ml">
          <Header currentStep={currentStep} jumpStep={jumpStep} />

          <Box flex={1}>
            <ScrollView
              horizontal
              pagingEnabled
              ref={__scrollRef}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(e) => updateStep(e.nativeEvent.contentOffset.x)}
            >
              <PhoneStep control={control} errors={errors} isHidden={currentStep === 1} />

              <CodeStep
                watch={watch}
                errors={errors}
                control={control}
                isHidden={currentStep === 0}
              />
            </ScrollView>

            <Box px="md" flex={1}>
              <Button onPress={handleSubmit(onSubmit)}>
                {currentStep === 0 ? "Enviar" : "Continuar"}
              </Button>
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
} // 242

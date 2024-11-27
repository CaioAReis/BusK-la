import { Box, Button, Dot } from "@/components";

type FooterProps = {
  currentStep: number;
  jumpStep: VoidFunction;
};

export function Footer({ currentStep, jumpStep }: FooterProps) {
  return (
    <Box width="100%" px="md" mt="md">
      <Box mb="lg" justifyContent="center" gap="md" flexDirection="row">
        <Dot selected={currentStep === 0} />
        <Dot selected={currentStep === 1} />
        <Dot selected={currentStep === 2} />
      </Box>

      <Button onPress={jumpStep}>Continuar</Button>
    </Box>
  );
}

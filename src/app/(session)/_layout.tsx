import { Stack } from "expo-router";

export default function SessionLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="updateAccount/index" />
      <Stack.Screen name="shipping" />
    </Stack>
  );
}

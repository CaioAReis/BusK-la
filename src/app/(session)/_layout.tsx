import { Stack } from "expo-router";

export default function SessionLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="delivery/[id]" />
      <Stack.Screen name="updateAccount/index" />
    </Stack>
  );
}

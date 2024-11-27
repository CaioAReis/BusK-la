import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index/index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index/index" />
      <Stack.Screen name="authCode/index" />
      <Stack.Screen name="createAccount/index" />
    </Stack>
  );
}

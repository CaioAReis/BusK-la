import { EditScreenInfo } from "./EditScreenInfo";

import { Box, Text } from "@/theme";

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center" backgroundColor="bg100">
      <Text variant="title">{title}</Text>
      <Box height={1} marginVertical="lg" width="80%" backgroundColor="color100" />
      <EditScreenInfo path={path} />
      {children}
    </Box>
  );
};

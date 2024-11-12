import { BottomSheet } from "./BottomSheet";
import Box from "./Box";
import { Divider } from "./Divider";
import { IconButton } from "./IconButton";
import { NotificationCard } from "./NotificationCard";
import { SectionTitle } from "./SectionTitle";

export function Notifications() {
  return (
    <BottomSheet
      trigger={(props) => (
        <Box position="relative">
          <IconButton icon="Bell" {...props} />
          <Box
            top={8}
            right={8}
            width={10}
            height={10}
            borderRadius="md"
            position="absolute"
            backgroundColor="error300"
          />
        </Box>
      )}
    >
      {() => (
        <Box borderRadius="md" overflow="hidden" mt="md">
          <SectionTitle icon="Bell" title="Notificações" />

          <Box gap="md">
            <NotificationCard
              isNew
              createdAt={new Date()}
              title="Notification title"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Divider color="bg300" />

            <NotificationCard
              isNew
              createdAt={new Date()}
              title="Notification title"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Divider color="bg300" />

            <NotificationCard
              createdAt={new Date()}
              title="Notification title"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Divider color="bg300" />

            <NotificationCard
              createdAt={new Date()}
              title="Notification title"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Box>
        </Box>
      )}
    </BottomSheet>
  );
}

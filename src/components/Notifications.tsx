import { useEffect, useState } from "react";

import { BottomSheet } from "./BottomSheet";
import Box from "./Box";
import { Divider } from "./Divider";
import { IconButton } from "./IconButton";
import { NotificationCard } from "./NotificationCard";
import { SectionTitle } from "./SectionTitle";

import { DATA } from "@/utils/data";
import { NotificationCardProps } from "@/utils/types";

export function Notifications() {
  const [list, setList] = useState<NotificationCardProps[]>([]);

  const handleSetNotificationsRead = () => {
    setList((prev) => prev.map((item) => ({ ...item, isNew: false })));
  };

  const hasNew = list.find((item) => item.isNew === true);

  useEffect(() => {
    setList(DATA.notifications);
  }, []);

  return (
    <BottomSheet
      onClose={handleSetNotificationsRead}
      trigger={(props) => (
        <Box position="relative">
          <IconButton icon="Bell" {...props} />

          {hasNew && (
            <Box
              top={8}
              right={8}
              width={10}
              height={10}
              borderRadius="md"
              position="absolute"
              backgroundColor="error300"
            />
          )}
        </Box>
      )}
    >
      {() => (
        <Box borderRadius="md" overflow="hidden">
          <SectionTitle icon="Bell" title="Notificações" />

          <Box gap="md">
            {list.map((notification) => (
              <Box key={notification._id} gap="md">
                <NotificationCard
                  body={notification.body}
                  isNew={notification.isNew}
                  title={notification.title}
                  createdAt={notification.createdAt}
                />

                <Divider color="bg300" />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </BottomSheet>
  );
}

import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { useTheme } from "@shopify/restyle";
import { useCallback, useRef } from "react";

import { Button } from "./Button";

import { makeStyles, Theme } from "@/theme";
import { height } from "@/utils/constants/device";
import { BottomSheetProps } from "@/utils/types";

export function BottomSheet({
  onOpen,
  onClose,
  snapPoints,
  trigger: Trigger,
  children: Children,
}: BottomSheetProps) {
  const styles = useStyles();
  const colors = useTheme<Theme>().colors;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
    if (onClose) onClose();
  }, []);

  const handleShowModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    if (onOpen) onOpen();
  }, []);

  const backdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        disappearsOnIndex={-1}
        onPress={handleCloseModalPress}
      />
    ),
    []
  );

  return (
    <>
      <Trigger onPress={handleShowModalPress} />

      <BottomSheetModal
        index={1}
        style={styles.teste}
        ref={bottomSheetModalRef}
        backdropComponent={backdrop}
        handleIndicatorStyle={[styles.handle, { backgroundColor: colors.bg400 }]}
        snapPoints={snapPoints || [height / 1.8, height / 1.1]}
        backgroundStyle={[styles.container, { backgroundColor: colors.bg200 }]}
      >
        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          <BottomSheetView>
            <Children handleCloseSheet={bottomSheetModalRef.current?.close} />
          </BottomSheetView>

          <Button marginBottom="xl" variant="text" onPress={handleCloseModalPress} marginTop="lg">
            Fechar
          </Button>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: theme.borderRadii.ml,
  },
  teste: {
    paddingHorizontal: theme.spacing.md,
    marginBpttom: 40,
  },
  handle: {
    height: 6,
    width: 60,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.ms,
    backgroundColor: theme.colors.bg400,
  },
}));

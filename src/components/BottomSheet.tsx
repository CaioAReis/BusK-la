import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { useCallback, useRef } from "react";

import { Button } from "./Button";

import { makeStyles } from "@/theme";
import { height } from "@/utils/constants/device";

type BottomSheetProps = {
  snapPoints?: number[];
  ref?: BottomSheetModal;
  trigger: JSX.ElementType;
  children: JSX.ElementType;
};

export function BottomSheet({
  snapPoints,
  trigger: Trigger,
  children: Children,
}: BottomSheetProps) {
  const styles = useStyles();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleShowModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const backdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={1} />
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
        backgroundStyle={styles.container}
        handleIndicatorStyle={styles.handle}
        snapPoints={snapPoints || [height / 1.8, height / 1.2]}
      >
        <BottomSheetView>
          <Children handleCloseSheet={bottomSheetModalRef.current?.close} />
        </BottomSheetView>

        <Button variant="text" onPress={handleCloseModalPress} marginTop="lg">
          Fechar
        </Button>
      </BottomSheetModal>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: theme.borderRadii.ml,
    backgroundColor: theme.colors.bg200,
  },
  teste: {
    paddingHorizontal: theme.spacing.md,
  },
  handle: {
    height: 6,
    width: 60,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.ms,
    backgroundColor: theme.colors.bg400,
  },
}));

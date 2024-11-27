import { router } from "expo-router";
import { useContext } from "react";

import { ShippingDetailsProps } from "../_components/DeliveryDetails";

import { API } from "@/services/api";
import AppContext from "@/utils/contexts/AppContext";

export function useDeliveryDetails({ delivery, setDelivery }: ShippingDetailsProps) {
  const { session } = useContext(AppContext);

  const currentDelivery =
    delivery.status === 0 ? delivery.addresses.toCollect : delivery.addresses.toDelivery;

  const user = currentDelivery.user;

  const handleStartDelivery = () => {
    API.startDelivery(delivery._id).then(() =>
      setDelivery((prev) => ({ ...prev!, userId: session!._id }))
    );
  };

  const handleCollectPackege = () => {
    API.confirmCollect(delivery._id).then(() => {
      setDelivery((prev) => ({ ...prev!, status: 1 }));
    });
  };

  const handleDeliveryPackege = () => {
    API.confirmDelivery(delivery._id).then(() => {
      setDelivery((prev) => ({ ...prev!, status: 2 }));
    });
  };

  const handleCallToClient = (phone: string) => {
    router.push(`tel://${phone}`);
  };

  const handlePress = () => {
    if (!delivery.userId) return handleStartDelivery();

    if (delivery.status === 0) return handleCollectPackege();

    return handleDeliveryPackege();
  };

  return { handlePress, handleCallToClient, user, currentDelivery };
}

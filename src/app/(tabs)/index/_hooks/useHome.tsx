import { useContext, useEffect, useState } from "react";

import { API } from "@/services/api";
import AppContext from "@/utils/contexts/AppContext";
import { DeliveryCardProps } from "@/utils/types";

export function useHome() {
  const { session, defaultCity } = useContext(AppContext);
  const [list, setList] = useState<DeliveryCardProps[]>([]);
  const [deliveryStarteds, setDeliveryStarteds] = useState<DeliveryCardProps[]>([]);

  const getDeliveries = () => {
    API.getDeliveryList(defaultCity._id)
      .then((result) => {
        setList(result.list);
      })
      .catch((error) => console.error(error));
  };

  const getUserDeliveries = (userId: string) => {
    API.getUserDeliveryList(session!._id)
      .then((result) => {
        setDeliveryStarteds(result.list);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    // setIsLoading(true);
    getDeliveries();
    getUserDeliveries(session!._id);
  }, [defaultCity]);

  return { list, deliveryStarteds, session };
}

import { useContext, useEffect, useState } from "react";

import { API } from "@/services/api";
import AppContext from "@/utils/contexts/AppContext";
import { DeliveryCardProps } from "@/utils/types";

export function useHistory() {
  const { session } = useContext(AppContext);
  const [list, setList] = useState<DeliveryCardProps[]>([]);

  useEffect(() => {
    API.getDeliveryHistory(session!._id).then((result) => {
      setList(result.list);
    });
  }, []);

  return { session, list };
}

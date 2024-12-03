import { useContext, useState } from "react";

import AppContext from "@/utils/contexts/AppContext";
import { DATA } from "@/utils/data";
import { City } from "@/utils/types";

export function useProfile() {
  const { session, isDark, setIsDark, defaultCity, setDefaultCity } = useContext(AppContext);

  const [cities, setCities] = useState<City[]>([]);

  const getCities = () => {
    setCities(DATA.citiesToWork);
  };

  return { session, isDark, setIsDark, defaultCity, setDefaultCity, cities, getCities };
}

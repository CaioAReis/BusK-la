import { Dispatch, createContext } from "react";

import { City, UserData } from "../types";

interface ContextData {
  isLoading: boolean;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;

  session: UserData | null;
  setSession: Dispatch<React.SetStateAction<UserData | null>>;

  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;

  defaultCity: City;
  setDefaultCity: React.Dispatch<React.SetStateAction<City>>;
}

const AppContext = createContext<ContextData>({} as ContextData);

export default AppContext;

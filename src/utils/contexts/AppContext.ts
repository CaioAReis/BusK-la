import { Dispatch, createContext } from "react";

import { UserData } from "../types";

interface ContextData {
  isLoading: boolean;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;

  session: UserData | null;
  setSession: Dispatch<React.SetStateAction<UserData | null>>;

  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<ContextData>({} as ContextData);

export default AppContext;

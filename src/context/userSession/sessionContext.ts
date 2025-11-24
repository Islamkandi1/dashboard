import { createContext } from "react";
import type { UserSessionContextType } from "../../types/userSession.type";

export const userSession = createContext<UserSessionContextType>({
  session:null
});

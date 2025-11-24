import type { Session } from "@supabase/supabase-js";
export interface UserSessionContextType {
  session: Session | null;
  setSession?: (session: Session | null) => void; 
}
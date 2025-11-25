import React, { useEffect, useState } from 'react'
import supabase from '../../../supabase-client';
import { userSession } from './sessionContext';
import type { Session } from "@supabase/supabase-js";
const UserSession = ({ children }: { children: React.ReactNode }) => {


  const [session, setSession] = useState<Session | null>(null);

  //  get session and follow session==================================================
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setSession(session);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <userSession.Provider value={{ session }}>
      {children}
    </userSession.Provider>
  )
}

export default UserSession

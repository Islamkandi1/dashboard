import React, { useEffect, useState } from 'react'
import supabase from '../../../supabase-client';
import { userSession } from './sessionContext';

const UserSession = ({ children }: { children: React.ReactNode }) => {


  const [session, setSession] = useState<object | null>(null);

  //  get session and follow session==================================================
  useEffect(() => {
    //     supabase.auth.getSession().then(({ data }) => {
    //   setSession(data.session);
    // });
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setSession(session);
        console.log(session);
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

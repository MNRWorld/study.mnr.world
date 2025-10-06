'use client';

import { createContext, useState, useEffect } from 'react';
import { createSupabaseClient } from '@/lib/supabase/client';
import { SupabaseClient, Session } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

type SupabaseContextType = {
  supabase: SupabaseClient;
  session: Session | null;
};

export const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);

export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [supabase] = useState(() => createSupabaseClient());
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (event === 'SIGNED_IN' && session) {
        // Upsert profile on sign in
        const user = session.user;
        if (user && !user.is_anonymous) {
          const { error } = supabase
            .from('profiles')
            .upsert({
              id: user.id,
              display_name: user.user_metadata.full_name || user.user_metadata.user_name,
              avatar_url: user.user_metadata.avatar_url,
            })
            .then(({ error }) => {
              if (error) console.error('Error upserting profile:', error);
            });
        }
      }
    });

    // Initial session fetch
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  return (
    <SupabaseContext.Provider value={{ supabase, session }}>
      {children}
    </SupabaseContext.Provider>
  );
};

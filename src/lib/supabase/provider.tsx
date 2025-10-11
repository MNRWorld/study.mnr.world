"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { createClient } from "@/lib/supabase/client";
import { SupabaseClient, Session, User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { Database } from "./database.types";

type SupabaseContextType = {
  supabase: SupabaseClient<Database>;
  session: Session | null;
  user: User | null;
  loading: boolean;
};

export const SupabaseContext = createContext<SupabaseContextType | undefined>(
  undefined,
);

export const SupabaseProvider = ({ children }: { children: ReactNode }) => {
  const [supabase] = useState(() => createClient());
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function getActiveSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    }

    getActiveSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      setLoading(false);

      if (event === "SIGNED_IN" && currentUser && !currentUser.is_anonymous) {
        // Upsert profile data to handle both new and existing users
        const { error: upsertError } = await supabase.from("profiles").upsert({
          id: currentUser.id,
          display_name:
            currentUser.user_metadata.full_name ||
            currentUser.user_metadata.name,
          avatar_url:
            currentUser.user_metadata.avatar_url ||
            currentUser.user_metadata.picture,
          updated_at: new Date().toISOString(),
        });

        if (upsertError) {
          console.error("Error upserting profile:", upsertError);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <SupabaseContext.Provider value={{ supabase, session, user, loading }}>
      {children}
    </SupabaseContext.Provider>
  );
};

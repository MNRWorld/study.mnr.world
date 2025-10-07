"use client";

import { createContext, useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { SupabaseClient, Session, User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

type SupabaseContextType = {
  supabase: SupabaseClient;
};

export const SupabaseContext = createContext<SupabaseContextType | undefined>(
  undefined,
);

export const SupabaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [supabase] = useState(() => createClient());

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        const user = session.user;
        if (user && !user.is_anonymous) {
          supabase
            .from("profiles")
            .upsert({
              id: user.id,
              display_name:
                user.user_metadata.full_name || user.user_metadata.user_name,
              avatar_url: user.user_metadata.avatar_url,
            })
            .then(({ error }) => {
              if (error) console.error("Error upserting profile:", error);
            });
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <SupabaseContext.Provider value={{ supabase }}>
      {children}
    </SupabaseContext.Provider>
  );
};

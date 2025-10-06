"use client";

import { useContext, useEffect, useState } from 'react';
import { SupabaseContext } from './provider';
import { User } from '@supabase/supabase-js';

export const useSupabase = () => {
  const context = useContext(SupabaseContext);

  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }

  return context.supabase;
};

export const useUser = () => {
    const context = useContext(SupabaseContext);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (context === undefined) {
            throw new Error('useUser must be used within a SupabaseProvider');
        }
        
        async function getUser() {
            setLoading(true);
            const { data: { user } } = await context.supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        }

        getUser();

        const { data: { subscription } } = context.supabase.auth.onAuthStateChange((_, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, [context]);

    return { user, loading };
}

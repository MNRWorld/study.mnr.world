import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/supabase/database.types';

export const createSupabaseClient = () =>
  createPagesBrowserClient<Database>({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });

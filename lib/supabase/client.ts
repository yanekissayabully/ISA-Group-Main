import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { Database } from './database.types';

export const createClient = () => 
  createPagesBrowserClient<Database>();
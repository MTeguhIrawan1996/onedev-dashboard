import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    BASE_URL: z.string().min(10),
  },

  client: {
    NEXT_PUBLIC_REST_API_URL: z.string().min(10),
    NEXT_PUBLIC_SUPABASE_URL: z.string().min(10),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(10),
  },

  shared: {
    NODE_ENV: z.enum(['development', 'production']),
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_REST_API_URL: process.env.NEXT_PUBLIC_REST_API_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
});
